import React, { Component } from 'react'
import {connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import firebase from '../../config/fbConfig'
import {editProduct} from '../../store/actions/productActions'

 class EditProduct extends Component {
    state={
    product_name: "",
    category:"",
    brand:"",
    warranty:"",
    MOQ:"",
    dispatch_no:"",
    stock:"",
    content:"",
    price:"",
    file:null,
    disable:false,
    
      }
   
  handleChange=(e)=>{
    console.log(this.state);
    this.setState({
      [e.target.id]:e.target.value,
    })
   
  }
  _prevURL(){
       console.log(this.state.file);
       console.log(this.props.location.pathname.slice(6));
       
       console.log(this.state.file)
       this.props.editProduct(this.state,this.props.location.pathname.slice(6),this.state.file);
      this.props.history.push('/product/'+this.props.location.pathname.slice(6));
      
  }
  _getURL=(bucketName,selectedFile,fileType,temp_var)=>{
      // console.log(this.props.story.file);
    // setTimeout(()=>{},3000)
    let storageReference=firebase.storage().ref()
    storageReference.child(`${bucketName}/${temp_var}`).getDownloadURL().then(
      (url)=>{
        this.setState({
          file:url,
          fileType:fileType,
        });

       
        this.props.editProduct(this.state,this.props.location.pathname.slice(6),this.props.product.file);
        this.props.history.push('/product/'+this.props.location.pathname.slice(6));
      } 
    )
    return true;
   
  }
  handleSubmit=(e)=>{
     console.log(this.props);
     console.log(this.state);
     //conso;this.props.product.product_name
    this.setState({
      disable:true,
    })
    e.preventDefault();
  
    
    if(this.state.product_name===''){
        this.state.product_name=this.props.product.product_name
    }
    if(this.state.category===''){
        this.state.category=this.props.product.category
    }
    if(this.state.brand===''){
        this.state.brand=this.props.product.brand
    }


    if(this.state.warranty===''){
        this.state.warranty=this.props.product.warranty
    }
    
    if(this.state.MOQ===''){
        this.state.MOQ=this.props.product.MOQ
    }

    
    if(this.state.dispatch_no===''){
        this.state.dispatch_no=this.props.product.dispatch_no
    }



    if(this.state.stock===''){
        this.state.stock=this.props.product.stock
    }

    if(this.state.content===''){
        this.state.content=this.props.product.content
    }


    if(this.state.price===''){
        this.state.price=this.props.product.price
    }


    if(!this.state.file){
         this.state.file=this.props.product.file
        // this.state.fileType=this.props.product.fileType
        // console.log(this.state);
         this._prevURL()
    }else if(!!this.state.file){

        var temp = document.getElementById("file"); 
 
        var selectedFile = temp.files[0];
        // console.log(selectedFile)
        let bucketName="products";
        const  fileType = selectedFile.type;
  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png','image/jpg'];
  if (!validImageTypes.includes(fileType)) {
    alert("Please upload valid file");
    this.props.history.push('/edit/'+this.props.location.pathname.slice(6));
    this.setState({
      disable:false
    })
  }else{
    this.setState({
      disable:true
    })
       var date=new Date().getTime();
        const temp_var=date.toString()+selectedFile.name
        // console.log(temp_var)
       let storageRef=firebase.storage().ref(`${bucketName}/${temp_var}`);
        storageRef.put(selectedFile).then(()=>{this._getURL(bucketName,selectedFile,fileType,temp_var)});
  }
       
     
    }

  }
  render(){
      console.log(this.props.location.pathname.slice(6))
    const {product,auth} =this.props;
 
    if(!auth.uid) return <Redirect to="/signin"/>
    if(product){
 
return (
    <div>
     <div class="alert alert-success alert-dismissible fade show container" role="alert">
     Please Edit the text and upload the new (If available) or re-upload the same image.                                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
    <div className="container my-5">
        <div className="card  shadow-lg  rounded">
        <div className="card-body">
            <h3 className="card-title text-center text-dark">Edit Product
            <img src="" alt="" className="text-center"></img></h3>
            <div className="card-text pb-5">
            
            <form onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Edit Product</h2>         
                     <div className="form-group">
                        <label for="exampleInputProductName">Product Name</label>
                        <input defaultValue={product.product_name} type="text" className="form-control" id="product_name" aria-describedby="emailHelp" placeholder="Enter Product Name" onChange={this.handleChange}/>
                    </div>



                    <div className="form-group" >
                        Category
                    <br></br>
                    <br></br>
                    <select defaultValue={product.category} id="category" name="category" onChange={this.handleChange}>
                            <option value="N/A">N/A</option>
                            <option value="mobile_accessories">Mobile and Accessories</option>
                            <option value="clothing">Clothing</option>
                            <option value="footwear">Footwear</option>
                            <option value="stationery">Stationery</option>
                            <option value="essentials">Essentials eg masks,sanitizers</option>
                            <option value="toys">Toys</option>
                            <option value="kitchenware">Kitchenware</option>
                            <option value="home_decor">Home Decor</option>
                            <option value="sports_goods">Sports Goods</option>
                    </select>
                </div>
                   




                    <div className="form-group">
                        <label for="exampleInputBrand">Brand</label>
                        <input defaultValue={product.brand} type="text" className="form-control" id="brand" aria-describedby="emailHelp" placeholder="Enter Brand" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputBrand">Warranty</label>
                        <input  defaultValue={product.warranty} type="number" className="form-control" id="warranty" aria-describedby="emailHelp" placeholder="Enter Warranty" onChange={this.handleChange}/>
                    </div>

                    
                    <div className="form-group">
                        <label for="exampleInputBrand">MOQ(Minimum Amount to be sold)</label>
                        <input defaultValue={product.MOQ} type="number" className="form-control" id="MOQ" aria-describedby="emailHelp" placeholder="Enter Minimum amount to be sold" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputBrand">Dispatch in number of days</label>
                        <input defaultValue={product.dispatch_no} type="number" className="form-control" id="dispatch_no" aria-describedby="emailHelp" placeholder="Enter Warranty" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputBrand">Stock</label>
                        <input defaultValue={product.stock} type="number" className="form-control" id="stock" aria-describedby="emailHelp" placeholder="Enter Stock" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputDescription">Product Description</label>
                        <input defaultValue={product.content} type="textarea" className="form-control" id="content" placeholder="Enter Product details" onChange={this.handleChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label for="exampleInputPrice">Price</label>
                        <input  defaultValue={product.price} type="number" className="form-control" id="price" aria-describedby="emailHelp" placeholder="Enter Price" onChange={this.handleChange}/>
                    </div>


                <div className="form-group my-2">
                <div className="fileUpload btn btn-secondary">
                <label htmlFor="file" className="upload">Upload your file
                <input type="file" className=" my-2"  id="file" onChange={this.handleChange} style={{display:'none'}} />
                </label>
                </div>
                {/* <div className="form-group my-2">
            <label htmlFor="content">Upload your image/video</label><br></br>
            <input type="file" className=" my-2" id="file" onChange={this.handleChange} required />
          </div> */}
                </div>
                <button type="submit" className="btn btn-primary btn-block">Update</button>
                
            </form>
            </div>
        </div>
        </div>
    </div>
    
    </div>
        )
}else{
    return (
        <div className="container text-center">
            <p>Loading Product...</p>
        </div>
        )
}
}
    }
    const mapStateToProps=(state,ownProps)=>{
       console.log(ownProps)
       console.log(state)
        const id=ownProps.location.pathname.slice(6);
        const products=state.firestore.data.products;
        console.log(products)
        const product=products?products[id] :null
        console.log(product)
        return{
            product:product,
            auth:state.firebase.auth,
            
        }
    }
    const mapDispatchToProps=(dispatch)=>{
            
        return{
            editProduct:(product,id,url)=>dispatch(editProduct(product,id,url))
        }
    }
    export default compose(
        connect(mapStateToProps,mapDispatchToProps),
        firestoreConnect([
            {collection:'products'}
        ]),
        
    )(EditProduct);