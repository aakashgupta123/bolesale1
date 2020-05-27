import React,{Component} from 'react';
// import  '../../App.css';
// import Notifications from './Notifications';
// import ProductList from '../products/ProductList';
// import {connect} from "react-redux";
// import {firestoreConnect} from 'react-redux-firebase';
// import {compose} from 'redux'
// import {Redirect} from 'react-router-dom'
// class Dashboard extends Component{
//     render(){
//         //console.log(this.props)
//         const {products,auth }=this.props
//         if(!auth.uid) return <Redirect to="/signin"/>
//         return(
//            <div className="container">
//                <div className="row">
//                    <div className="col-md-7">
//                        <ProductList products={products}/>
//                    </div>
//                    <div className="col-md-5">
//                        <Notifications/>
//                    </div>
//                </div>
//            </div>
//         );
//     }
// }   
// const mapStateToProps=(state)=>{
//     console.log(state)
//     return { 
//     products:state.firestore.ordered.products,
//     auth:state.firebase.auth
//     }
// }

// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         {
//             collection:'products',
            
//         }
// ])
// )(Dashboard);



// import React from 'react';
// import  '../../App.css';
// import ProductSummary from './ProductSummary'
// import {Link} from 'react-router-dom'
// const ProductList=({products})=>{
  
//     return(
//         <div className="product-list">
//           { products && products.map(product=>{
//             return (
//           <Link to={"/product/" + product.id}  key={product.id}>
//               <ProductSummary product={product}/>
//               </Link>
//             )
//           }) }
//         </div>
//     )
// }
// export default ProductList


// import React from 'react';

// const ProductSummary=({product})=>{
//     //console.log(product)
//     return(
//         <div className="container my-3 ">
//         <div className="card" style={{width: '18rem'}}>
//         <img src={product.file} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title"> {product.product_name}</h5>
//           <p className="card-text">Category   :  {product.category}</p>
//           <p className="card-text"> Brand   :  {product.brand}</p>
//           <p className="card-text">Price  :   {product.price}</p>
//           <a href="#" className="btn btn-primary">Description</a>
//         </div>
//       </div>
//          </div>
//     )
// }
// export default ProductSummary
