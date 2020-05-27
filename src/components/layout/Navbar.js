import React from 'react';
import '../../App.css'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar=(props)=>{
  const {auth}=props
  console.log(auth)
    const links=auth.uid ?<SignedInLinks/> :<SignedOutLinks/>
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
       <Link to="/"> <i class="fa fa-shopping-cart"id="icon" aria-hidden="true"></i></Link>
            &nbsp; &nbsp;
        <Link className="navbar-brand" to="/">BoleSale</Link>
        
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         {links}
        </div>
        </div>
      </nav>
      
    
    )
}
const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navbar);