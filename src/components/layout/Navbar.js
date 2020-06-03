import React from 'react';
import '../../App.css';
import './Navbar.css'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar=(props)=>{
  const {auth}=props
  console.log(auth)
  console.log(props)
    const links=auth.uid ?<SignedInLinks/> :<SignedOutLinks/>
    return(
        /*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
       <Link to="/"> <i className="fa fa-shopping-cart"id="icon" aria-hidden="true"></i></Link>
            &nbsp; &nbsp;
        <Link className="navbar-brand" to="/">BoleSale</Link>
        
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         {links}
        </div>
        </div>
      </nav>*/
      <div>
<div id="navbar-wrapper">
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
       <Link to="/"> <i className="fa fa-shopping-cart"id="icon" aria-hidden="true"></i></Link>
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
        </header>
    </div>
    <div id="wrapper">
        <div id="sidebar-wrapper">
            <aside id="sidebar">
                <ul id="sidemenu" className="sidebar-nav">
                    <li>
                        <Link to="/">
                            <span className="sidebar-icon"><i className="fa fa-dashboard"></i></span>
                            <span className="sidebar-title">Home</span>
                        </Link>
                    </li>
                    <li>
                        <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-2">
                            <span className="sidebar-icon"><i className="fa fa-users"></i></span>
                            <span className="sidebar-title">Management</span>
                            <b className="caret"></b>
                        </a>
                        <ul id="submenu-2" className="panel-collapse collapse panel-switch" role="menu">
                            <li><a href="#"><i className="fa fa-caret-right"></i>Users</a></li>
                            <li><a href="#"><i className="fa fa-caret-right"></i>Roles</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-3">
                            <span className="sidebar-icon"><i className="fa fa-newspaper-o"></i></span>
                            <span className="sidebar-title">Blog</span>
                            <b className="caret"></b>
                        </a>
                        <ul id="submenu-3" className="panel-collapse collapse panel-switch" role="menu">
                            <li><a href="#"><i className="fa fa-caret-right"></i>Posts</a></li>
                            <li><a href="#"><i className="fa fa-caret-right"></i>Comments</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sidebar-icon"><i className="fa fa-database"></i></span>
                            <span className="sidebar-title">Data</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sidebar-icon"><i className="fa fa-terminal"></i></span>
                            <span className="sidebar-title">Console</span>
                        </a>
                    </li>
                </ul>
            </aside>            
        </div>
        <main id="page-content-wrapper" role="main">
        </main>
    </div>
    </div>
      
      
    )
}
const mapStateToProps=(state)=>{
  console.log(state)
  return{
    auth:state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navbar);







