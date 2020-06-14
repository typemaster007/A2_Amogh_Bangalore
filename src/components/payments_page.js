import React from "react";

import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import "react-toastify/dist/ReactToastify.css";
import "./css/paycss.css";
import {validateCard} from "./tools/validate_card";
import visa from './images/visa.svg'; 
import amex from './images/amex.svg'; 
import master from './images/mastercard.svg'; 
import discover from './images/discover.svg'; 
import {Link} from 'react-router-dom';

toast.configure();
let set = false;
const validateemail = 
  RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);


const validateForm = (errors) => {
    let valid = false;
    Object.values(errors).forEach(      // if we have an error string set valid to false
      (val) => 
      { if(val==='set')
            { valid = true; }
            else
            { valid = false; }
      }      
    );
    return valid;
  }
  const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
      (val) => {if(val.length > 0)
        {
            if(val!=='set'){
                (count = count+1);
            }
        } }
    );
    return count;
  }
  

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      fullname: null,
      cardnum: null,
      email: null,
      expmonth: null,
      expyear: null,
      cvv: null,
      flag: 0,
      errors: {
        cardnum: '',
        fullname: '',
        email: '',
        expmonth: '',
        expyear: '',
        cvv: '',
      }
    };
  }
  
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;   
  
    switch (name) {
      case 'cardnumber': 
            if(event.target.value.length === 0) {
              event.target.value = '';
            }
            else if((!value.match(/^[0-9 ]+$/i)))           //Accepts only Number input and disregards other characters
            {
              event.target.value = event.target.value.replace(/[^0-9]/ig, '')
            }
            else {                                         //To limit the value of the credit card number to 16 digits
              event.target.value = Math.max(0, parseInt(event.target.value) ).toString().slice(0,16);
            }       
            
              if(validateCard(value)===true && value.length===16)
              {
                errors.cardnum = "set";
                set = true;
              }
              else if(value.length===17 && set===true)
              {
                errors.cardnum = "set";
              
              }
              else{ errors.cardnum = "Enter valid 16 digit Cardnumber!";
              set = false;}
            break;
      
      case 'fullname':
            if((!event.target.value.match(/^[a-zA-Z ]+$/i)))
            {
              event.target.value = event.target.value.replace(/[^A-Za-z]/ig, '')
            }
            else{
              errors.fullname = 
              value.length < 5 || !(value.match(/^[a-zA-z ]+$/i))
                ? 'Min 5 alphabetic characters!'
                : 'set';
            }
        break;
      
      case 'email': 
        errors.email = 
        validateemail.test(value)
            ? 'set'
            : 'Email is not Valid!';
        break;
      
      case 'expmonth':         
          event.target.value = event.target.value.toUpperCase();          
          if((!event.target.value.match(/^[a-zA-Z ]+$/i)))
              {
                event.target.value = event.target.value.replace(/[^A-Za-z]/ig, '');
              }

          if(event.target.value === 'JAN'| event.target.value === 'FEB'| event.target.value === 'MAR'
          | event.target.value === 'APR'| event.target.value === 'MAY'| event.target.value === 'JUN'
          | event.target.value === 'JUL'| event.target.value === 'AUG'| event.target.value === 'SEPT'
          | event.target.value === 'OCT'| event.target.value === 'NOV'| event.target.value === 'DEC')
          {
            errors.expmonth = 'set';
          }
          else { errors.expmonth = 'Enter Valid Month !'; }

          break;

      case 'expyear':
          if((!value.match(/^[0-9]+$/i)))           //Accepts only Number input and disregards other characters
          {
            event.target.value = event.target.value.replace(/[^0-9]/ig, '')
          }
          let curyear = new Date().getFullYear();
          errors.expyear = value > curyear ? 'set' : 'Invalid Year Entered!'
          break;

      case 'cvv':
            if((!value.match(/^[0-9]+$/i)))           //Accepts only Number input and disregards other characters
            {
              event.target.value = event.target.value.replace(/[^0-9]/ig, '')
            }           
            errors.cvv = value >= 1 ? 'set' : 'Invalid CVV Entered!'
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

 

  render (){
    const {errors, formValid} = this.state;
      return (
        <div class="row" style={{ display: 'flex'}}>
        <div class="container8" style={{marginLeft: '100px', background:'white', paddingTop: '15px'}}>
          <h2 style={{background:'white',marginLeft: '100px', float: 'left'}}>Payment Page</h2> Accepted Cards :<img className="img1" src={visa} alt="visa" />
          <img className="img1" src={amex} alt="amex" /><img className="img1" src={master} alt="master" />
          <img className="img1" src={discover} alt="discover" />
        </div>
        <div class="col-75" style={{ display: 'flex'}}>
          <div class="container4" style={{float : 'left', paddingRight : '5px', display: 'flex'}}>
            <form onSubmit={this.handleSubmit} noValidate >
              <div class="row1" style={{ display: 'flex'}}>
                <div class="col-50" style={{ float : 'left'}}>
                  <h4>Billing Address</h4>
                  <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                  <input type="text" class="payput" onChange={this.handleChange} 
                  noValidate  id="fname" name="fullname" placeholder="John M. Doe"/>
                  <label for="email"><i class="fa fa-envelope"></i> Email</label>
                  <input type="text" class="payput" onChange={this.handleChange} 
                  noValidate  id="email" name="email" placeholder="john@example.com"/>
                  <label for="adr"><i class="fa fa-address-card-o"></i> Address (Optional)</label>
                  <input type="text" class="payput" id="adr" name="address" placeholder="542 W. 15th Street"/>
                  <label for="city"><i class="fa fa-institution"></i> City (Optional)</label>
                  <input type="text" class="payput" id="city" name="city" placeholder="New York"/>
      
                  <div class="row">
                    <div class="col-50">
                      <label for="state">State (Optional)</label>
                      <input type="text" class="payput" id="state" name="state" placeholder="NY"/>
                    </div>
                    <div class="col-50">
                      <label for="zip">Zip (Optional)</label>
                      <input type="text" class="payput" id="zip" name="zip" placeholder="10001"/>
                    </div>
                  </div>
                </div>
      
                <div class="col-50" >
                  <h4>Payment</h4>
                  
                  <label for="cname">Name on Card</label>
                  <input type="text" class="payput" onChange={this.handleChange} 
                  noValidate id="cname" name="fullname" placeholder="John More Doe"/>
                  <label for="ccnum">Credit card number</label>
                  <input type="text" className ="form-inline1" class="payput"  onChange={this.handleChange} 
                    noValidate id="ccnum"  maxLength="16" name="cardnumber" placeholder="1111222233334444"/>
                  
                  <label for="expmonth">Exp Month</label>
                  <input type="text" class="payput" id="expmonth" onChange={this.handleChange} 
                    noValidate name="expmonth"  maxLength="3" placeholder="Feb"/>
      
                  <div class="row">
                    <div class="col-50">
                      <label for="expyear">Exp Year</label>
                      <input type="text" class="payput" maxLength="4" onChange={this.handleChange} 
                      noValidate  id="expyear" name="expyear" placeholder="2021"/>
                    </div>
                    <div class="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" class="payput" onChange={this.handleChange} 
                      noValidate maxLength="3" id="cvv" name="cvv" placeholder="352"/>
                    </div>
                  </div>
                </div>               
      
              </div>
              <div >
              <label style={{marginLeft: '30px'}}>
                 Complete Payment process:
              </label>
              <Popup trigger={<button type="submit" className="btn btn-primary btn-inline" style={{marginLeft: '90px'}}>Checkout</button>} 
                modal
                closeOnDocumentClick
                >                
                {this.state.errorCount !== null ? 
                <div style={{border: '5px',borderBlockColor: 'black', borderRadius: '10px', background: 'white'}}>
                  <h8 style={{display: 'flex', justifyContent: 'center'}}>Payment details</h8>
                  <div className="validmsg" style={{display: 'flex', justifyContent: 'center'}}> 
                {formValid ? 'Payment Completed Successfully!' 
                : 'Incomplete details, Please enter all the details correctly! (Press Enter to close or click outside)'}
                </div></div> : 'Form not submitted'}
                
                </Popup>
                <Link type="submit" className="btn btn-primary btn-inline2" to="/">Cancel</Link>
              </div>
            </form>
          </div>
          <div class="container6" style={{float : 'left', paddingRight : '5px'}}>
          <h4>Payment Status</h4>
                  
                  <label for="cname">Status</label>
                  <div >&nbsp;{errors.fullname.length > 0 && errors.fullname !== 'set' 
                  &&  <span1 className='error1'>{errors.fullname}</span1>}</div>
                  <br/>
                  <div>&nbsp;{errors.cardnum.length > 0 && errors.cardnum !== 'set' 
                  &&   <span1 className='error1'>{errors.cardnum}</span1>}</div>
                  <br/>
                  <div>&nbsp;{errors.email.length > 0 && errors.email !== 'set' 
                  &&   <span1 className='error1'>{errors.email}</span1>}</div>
                  <br/>
                  <div>&nbsp;{errors.expmonth.length > 0 && errors.expmonth !== 'set' 
                  &&   <span1 className='error1'>{errors.expmonth}</span1>}</div>
                  <br/>
                  <div>&nbsp;{errors.expyear.length > 0 && errors.expyear !== 'set' 
                  &&   <span1 className='error1'>{errors.expyear}</span1>}</div>
                  <br/>
                  <div>&nbsp;{errors.cvv.length > 0 && errors.cvv !== 'set' 
                  &&   <span1 className='error1'>{errors.cvv}</span1>}</div>
          </div>
          
        </div>
      
        
      </div>
      );  
  }
}


