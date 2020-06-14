import React, { Component } from "react";
import Popup from "reactjs-popup";
import Dialog from "./home_page";
import {Link} from 'react-router-dom';

const validEmailRegex = 
  RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

const validFirstnamereg = 
  RegExp(/^[a-z ,.'-]+$/i);

  const validateForm = (errors) => {
    let valid = false;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => 
      { if(val=='set')
            {
                valid = true;
            }
            else
            {
                valid = false;
            }
        }
      
      
    );
    return valid;
  }
  const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
      (val) => {if(val.length > 0)
        {
            if(val!='set'){
                (count = count+1);
            }
        } }
    );
    return count;
  }
  export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formValid: false,
          errorCount: null,
          firstname: null,
          email: null,
          password: null,
          confirmpass: null,
          mobile: null,
          flag: 0,
          errors: {
            firstname: '',
            email: '',
            password: '',
            confirmpass: '',
            mobile: '',
          }
        };
      }
      

      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        
      
        switch (name) {
          case 'firstname': 
            errors.firstname = 
              value.length < 5 || !(value.match(/^[a-zA-z ]+$/i))
                ? 'Min 5 alphabetic characters!'
                : 'set';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? 'set'
                : 'Email is not valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : 'set';
            break;

          case 'confirmpass':
              errors.confirmpass = value === this.state.password ? 'set' : 'Passwords do NOT match !';
              break;

          case 'mobile':
              //errors.mobile = value.length >0 && value.length < 10 ? 'Enter 10 digit mobile number' : (value.length>10 ? 'More than 10 digits!' : 'set');
              if (typeof value !== "undefined") {
                if (!value.match(/^[0-9]{10}$/)) {
                  errors.mobile = "Please enter valid 10 digit mobile no.";
                }
                else{
                    errors.mobile = 'set';
                }
              }
              break;

          default:
            break;
        }
      
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
      }

      handleSubmit = (event) => {
          
        event.preventDefault();
        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});
        
        
      }

    render() {
        const {errors, formValid} = this.state;
        return (
            <div class="container5">
            <form onSubmit={this.handleSubmit} noValidate >
                <h3 style={{display: 'flex', justifyContent: 'center'}}>Register</h3>                

                <div className="firstname">                
                    <label>Name:  &nbsp;&nbsp;</label>
                    <input type="text" pattern = "[A-Za-z]" name="firstname"className="form-inline1" placeholder="First name" autoComplete="off" 
                    onChange={this.handleChange} noValidate/>                                    
                    <input type="text" className="form-inline4" name="lastname" placeholder="Last name" />
                    {errors.firstname.length > 0 && errors.firstname != 'set' &&   <span className='error'>{errors.firstname}</span>}
                </div>               
                
                

                <div className="form-group">       
                    <label>Email: &nbsp;&nbsp;</label>
                    <input type="email" name="email" className="form-inline2" placeholder="Enter email" 
                    onChange={this.handleChange} noValidate/>
                    {errors.email.length > 0 && errors.email != 'set' && 
                    <span className='error'>{errors.email}</span>}
                    
                    
                </div>

                <div className="form-group">  
                    <label className="passwordclass">Password:</label>
                    <input type="password" name="password" className="form-inline2" placeholder="Enter password"
                    onChange={this.handleChange} noValidate />
                    {errors.password.length > 0 && errors.password != 'set' &&   <span className='error'>{errors.password}</span>}
                                     
                </div>

                <div className="form-g1">
                    <label className="largeclass">Confirm Password:</label>
                    <input type="password" name="confirmpass" className="form-inline2" placeholder="Enter password" 
                    onChange={this.handleChange} noValidate />
                    {errors.confirmpass.length > 0 && errors.confirmpass != 'set' &&   <span className='error'>{errors.confirmpass}</span>}
                   
                </div>
                
                <div className="form-g1">
                    <label className="largeclass">Mobile Number:</label>
                    <input type="text" pattern="[0-9]*" name="mobile" className="form-inline3" placeholder="Mobile Number" 
                    onChange={this.handleChange} noValidate />
                    {errors.mobile.length > 0 && errors.mobile != 'set' &&   <span className='error'>{errors.mobile}</span>}
                </div>
                
                <Popup trigger={<button type="submit" className="btn btn-primary btn-inline">Sign Up</button>} 
                modal
                closeOnDocumentClick
                >                
                {this.state.errorCount !== null ? 
                <div><h3 style={{display: 'flex', justifyContent: 'center'}}>Register details</h3>
                <div className="validmsg" style={{display: 'flex', justifyContent: 'center'}}> 
                {formValid ? 'User registered Successfully! ✅ directing to Home Page' 
                : 'Incomplete details, Please enter all the details correctly! '}</div></div> : 'Form not submitted'}
                
                </Popup>
                
               
                
                <Link type="submit" className="btn btn-primary btn-inline2" to="/">Cancel</Link>
                <p className="forgot-password2 ">
                    Already registered <a href="/sign-in">sign in?</a>                    
                </p>

                
            </form>
            </div>
        );
    }
}