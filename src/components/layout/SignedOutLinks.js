import React from 'react';
import '../../App.css'
import {Link,NavLink} from 'react-router-dom'
const SignedOutLinks=()=>{
    return(
        <ul className="navbar-nav ml-auto" >
        <li className="nav-item active mx-1">
              <Link to="/signin" className="nav-link" >Sign In</Link>
            </li>
            <li className="nav-item active mx-1">
              <Link to="/signup" className="nav-link" >Sign Up </Link>
            </li>
           
    </ul>
        )
    }
    
export default SignedOutLinks;