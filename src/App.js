import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import logo from './components/images/logo_web.PNG'; 
import Popup from "reactjs-popup";
import Modal from "./components/tools/modalcomp";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';



import SignUp from "./components/signup_component";
import Home from "./components/home_page";
import Payments from "./components/payments_page";
import Blog from "./components/blog_page";



class App extends Component  {

  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  
 render(){
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a href='/'>
          <img className="img1" src={logo} alt="Logo" />
          </a>
          <Link className="navbar-brand" to={"/home"}>RentalVista</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              
              <li className="nav-item">              
              <OverlayTrigger  
                placement= "bottom" overlay={  <Tooltip id={`tooltip-$'bottom'`}><strong>Login page</strong></Tooltip>}>
                <Link className="nav-link" variant="secondary">Login</Link>
              </OverlayTrigger>                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"} style={{color: 'black'}}>Register</Link>
              </li>
              <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
              <li className="nav-item">
                <Link className="nav-link" to={"/blogs"} style={{color: 'black'}}>Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/payments"} style={{color: 'black'}} >Payments</Link>
              </li>
              <li className="nav-item">              
              <OverlayTrigger  
                placement= "bottom" overlay={  <Tooltip id={`tooltip-$'bottom'`}><strong>Help Section</strong></Tooltip>}>
                <Link className="nav-link" variant="secondary">Help</Link>
              </OverlayTrigger>                
              </li>
              <li className="nav-item">
              <OverlayTrigger  
                placement= "bottom" overlay={  <Tooltip id={`tooltip-$'bottom'`}><strong>About Section</strong></Tooltip>}>
                <Link className="nav-link" >About</Link>
              </OverlayTrigger>   
              </li>
              <li>
              <OverlayTrigger  
                placement= "bottom" overlay={  <Tooltip id={`tooltip-$'bottom'`}><strong>Contact Section</strong></Tooltip>}>
                <Link className="nav-link" >Contact us</Link>
              </OverlayTrigger>                  
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
          <Route exact path="/"><Redirect to="/home" /></Route>
            <Route exact path='/home' component={Home} />
            <Route path="/register" component={SignUp} />            
            <Route path="/payments" component={Payments} />
            <Route path="/blogs" component={Blog} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
}

export default App;