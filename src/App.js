import React,{Component} from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import ProductDetails from './components/products/ProductDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProduct from './components/products/CreateProduct';
import './index.css';
import Notifications from './components/dashboard/Notifications';
class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div id="app">
      <Navbar/>
      
      <Switch>
      <Route exact path="/" component={Dashboard} >
      </Route>
      <Route path="/product/:id" component={ProductDetails}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/create" component={CreateProduct}/>
      <Route path="/notification" component={Notifications}/>
      </Switch>
    </div>
    </BrowserRouter>
  );}
}

export default App;
