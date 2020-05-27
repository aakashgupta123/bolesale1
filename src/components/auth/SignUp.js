import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import '../../App.css';
 class SignUp extends Component {
    state=
    {
        email:"",
        password:"",
        firstName:"",
        lastName:""
    }
     handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
     }
     handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
     }
    render(){
        const {auth}=this.props
        if (auth.uid) return <Redirect to="/"/>
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="mt-5">
                <div className="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter Last Name" onChange={this.handleChange}/>
                    </div>
                     <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
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

export default connect(mapStateToProps)(SignUp)
