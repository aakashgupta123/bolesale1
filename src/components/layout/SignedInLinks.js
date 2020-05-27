import React from 'react';
import '../../App.css'
import {NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut, signIn} from '../../store/actions/authActions'
const SignedInLinks=(props)=>{
  
    return(  
    <ul className="navbar-nav ml-auto" >
      <Link to="/notification"><i className="fa fa-bell-o" id="bell" aria-hidden="true"></i></Link>
        <li className="nav-item active mx-1">
              <Link to="/create" className="nav-link" >New Product</Link>
            </li>
            <li className="nav-item active mx-1">
              <a onClick={props.signOut} className="nav-link" >Logout</a>
            </li>
            <li className="nav-item active mx-1">
              <Link to="/" className="nav-link" >NN </Link>
            </li>
            
    </ul>
        )
    }
    const mapDispatchToProps=(dispatch)=>{
      return{
        signOut:()=>dispatch(signOut())
      }
    }
export default connect(null,mapDispatchToProps)(SignedInLinks);