import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import '../../App.css';
const ProductDetails=(props)=>{
    console.log(props)
   const {product,auth}=props;
   if (!auth.uid) return <Redirect to='/signin/'/>
   if (product){
        return(
            <div className="container my-3">
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
    
              </div>)}  
        else
        {

            return(
                    <div className="container"><p>loading...</p></div>
                )
        }

}
const mapStateToProps=(state,ownProps)=>{
    //console.log(state)
    const id=ownProps.match.params.id
    const products=state.firestore.data.products
    const product=products ?products[id]:null
    return{
        product:product,
        auth:state.firebase.auth
    }
  }
  
  export default compose(connect(mapStateToProps),
    firestoreConnect([
      {collection:"products"}
    ])
    )( ProductDetails)