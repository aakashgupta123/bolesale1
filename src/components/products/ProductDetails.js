import React, { Component } from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import '../../App.css';
import {Link} from 'react-router-dom'
import {deleteProduct} from '../../store/actions/productActions';
class ProductDetails extends Component{
  delete(id){
    //    console.log(this.props.story);
    // console.log(this.props.match.params.id);
    this.props.deleteProduct(this.props.product,this.props.match.params.id);
    this.props.history.push('/');
    }
  render()
  {
  console.log(this.props)
   const {product,auth}=this.props;
   //console.log(id)
   
   if (!auth.uid) return <Redirect to='/signin/'/>
   if (product){
    console.log(product)
        return(
          
          <div>
            
          <button type="button" id="editbtn" class="btn btn-info ml-5 mr-3"><Link to={"/edit/"+this.props.match.params.id} product={product} key={product.id}  >Edit Product</Link></button>
          <button className="btn btn-danger my-3" onClick={this.delete.bind(this,product.id)}>Delete Product</button>
            <div className="container mx-5 my-3 " >
                <div className="card" style={{width: '38rem'}}>
                <img src={product.file} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Seller Name: {product.sellerFirstName} {product.sellerLastName}</h5>
              <p className="card-title">Product Name:{product.product_name}</p>
              <p className="card-text">Category:{product.category}</p>
              <p className="card-text">Category:{product.category}</p>
              <p className="card-text">Brand:{product.brand}</p>
              <p className="card-text">Warranty:{product.warranty}</p>
              <p className="card-text">Minimun Amount to be sold:{product.MOQ}</p>
              <p className="card-text">Dispatch in number of days:{product.dispatch_no}</p>
              <p className="card-text">Stock:{product.stock}</p>
              <p className="card-text">Product Description:{product.content}</p>
              <p className="card-text">Price:{product.price}</p>

            </div>
          </div>
          </div>
              </div>)}  
        else
        {

            return(
                    <div className="container"><p>loading...</p></div>
                )
        }

}}
const mapStateToProps=(state,ownProps)=>{
  const id=ownProps.match.params.id;
  const products=state.firestore.data.products;
  //console.log(products)
  const product=products?products[id] :null
  return{
      product:product,
      auth:state.firebase.auth,
      
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    deleteProduct:(product,id)=>dispatch(deleteProduct(product,id))
    }
}
  
  export default compose(connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
      {collection:"products"}
    ])
    )( ProductDetails)