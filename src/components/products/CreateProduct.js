import React, { Component } from 'react'
import {createProduct} from '../../store/actions/productActions';
import {connect}  from 'react-redux';
import firebase from '../../config/fbConfig'
import { Redirect } from 'react-router-dom';
import '../../App.css';
 class CreateProduct extends Component {
   
    state=
    {
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
    _getURL=(bucketName,selectedFile)=>{
      
    //console.log(bucketName)
      let storageReference=firebase.storage().ref()
      storageReference.child(`${bucketName}/${selectedFile.name}`).getDownloadURL().then(
        (url)=>{
          this.setState({
            file:url,
           
          });
        
          this.props.createProduct(this.state);
          this.props.history.push('/');
        } 
      )
      return true;
     
    }
     handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
     }
     handleSubmit=(e)=>{
  
        e.preventDefault();
     
        var temp = document.getElementById("file"); 
    
       var selectedFile = temp.files[0];
       let bucketName="products";
    
      const  fileType = selectedFile.type;
     const validImageTypes = ['image/gif', 'image/jpeg', 'image/png','image/jpg'];
     if (!validImageTypes.includes(fileType)) {
      alert("Please upload valid file");
      this.props.history.push('/create');
     }
     else{
      this.setState({
        disable:true
      })
          let storageRef=firebase.storage().ref(`${bucketName}/${selectedFile.name}`);
        storageRef.put(selectedFile).then(()=>{this._getURL(bucketName,selectedFile)});
        //console.log(selectedFile)
        
     }
     
     }
    render(){
        const {auth}=this.props
        if (!auth.uid) return <Redirect to='/signin/'/>
        return(
            <div className="container my-5">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Create Product</h2>         
                     <div className="form-group">
                        <label for="exampleInputProductName">Product Name</label>
                        <input type="text" className="form-control" id="product_name" aria-describedby="emailHelp" placeholder="Enter Product Name" onChange={this.handleChange}/>
                    </div>



                    <div className="form-group" >
                        Category
                    <br></br>
                    <br></br>
                    <select id="category" name="category" onChange={this.handleChange}>
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
                        <input type="text" className="form-control" id="brand" aria-describedby="emailHelp" placeholder="Enter Brand" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputBrand">Warranty</label>
                        <input type="number" className="form-control" id="warranty" aria-describedby="emailHelp" placeholder="Enter Warranty" onChange={this.handleChange}/>
                    </div>

                    
                    <div className="form-group">
                        <label for="exampleInputBrand">MOQ(Minimum Amount to be sold)</label>
                        <input type="number" className="form-control" id="MOQ" aria-describedby="emailHelp" placeholder="Enter Minimum amount to be sold" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputBrand">Dispatch in number of days</label>
                        <input type="number" className="form-control" id="dispatch_no" aria-describedby="emailHelp" placeholder="Enter Warranty" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputBrand">Stock</label>
                        <input type="number" className="form-control" id="stock" aria-describedby="emailHelp" placeholder="Enter Stock" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputDescription">Product Description</label>
                        <input type="textarea" className="form-control" id="content" placeholder="Enter Product details" onChange={this.handleChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label for="exampleInputPrice">Price</label>
                        <input type="number" className="form-control" id="price" aria-describedby="emailHelp" placeholder="Enter Price" onChange={this.handleChange}/>
                    </div>

                    
                    <div className="form-group">
                        <label for="exampleImage">Enter Image</label>
                        <br/>
                        <input type="file" className="" id="file" placeholder="Enter Product details" onChange={this.handleChange}/>
                       
                        <br></br>
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary" disabled={this.state.disable}>Create</button>
                    </div>
                </form>
            </div>
            
        )
    }
}


const mapStateToProps=(state)=>{
return{
    auth:state.firebase.auth
}
}

const mapDispatchToProps=(dispatch)=>{
return{
    createProduct:(product)=>dispatch(createProduct(product))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProduct)
