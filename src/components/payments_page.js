import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./css/paycss.css";
import {validateCard} from "./tools/validate_card";

toast.configure();

const validateemail = 
  RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

const product = {
    name: "Improve your Room Posting Priority",
    price: 299.99,
    description: "Room PAdvertisement Fee"
  }

  let set = false;

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      fullname: null,
      cardnum: null,
      cardval: false,
      email: null,
      expmonth: null,
      expyear: null,
      flag: 0,
      errors: {
        cardval: false,
        cardnum: '',
        fullname: '',
        email: '',
        expmonth: '',
        expyear: '',
        mobile: '',
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
            
              if(validateCard(value)==true && value.length==16)
              {
                errors.cardnum = "set";
                set = true;
              }
              else if(value.length==17 && set==true)
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

          if(event.target.value == 'JAN'| event.target.value == 'FEB'| event.target.value == 'MAR'
          | event.target.value == 'APR'| event.target.value == 'MAY'| event.target.value == 'JUN'
          | event.target.value == 'JUL'| event.target.value == 'AUG'| event.target.value == 'SEPT'
          | event.target.value == 'OCT'| event.target.value == 'NOV'| event.target.value == 'DEC')
          {
            errors.expmonth = 'set';
          }
          else { errors.expmonth = 'Enter Valid Month !'; }

          break;

      case 'expyear':
          if((!value.match(/^[0-9 ]+$/i)))           //Accepts only Number input and disregards other characters
          {
            event.target.value = event.target.value.replace(/[^0-9]/ig, '')
          }
          let curyear = new Date().getFullYear();
          errors.expyear = value > 2019 ? 'set' : 'Invalid Year Entered!'
          break;

     

      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })
  }

  render (){
    const {errors} = this.state;
      return (
        <div class="row">
        <div class="col-75">
          <div class="container4" style={{float : 'left', paddingRight : '5px'}}>
            <form action="/action_page.php">
      
              <div class="row1">
                <div class="col-50">
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
      
                <div class="col-50">
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
                      <input type="text" class="payput" maxLength="3" id="cvv" name="cvv" placeholder="352"/>
                    </div>
                  </div>
                </div>
                
      
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" class="btn5"/>
            </form>
          </div>
          <div class="container6" style={{float : 'left', paddingRight : '5px'}}>
          <h4>Payment Status</h4>
                  
                  <label for="cname">Status</label>
                  <div >&nbsp;{errors.fullname.length > 0 && errors.fullname != 'set' 
                  &&  <span1 className='error1'>{errors.fullname}</span1>}</div>
                  <br/>
                  <div>&nbsp;{errors.cardnum.length > 0 && errors.cardnum != 'set' 
                  &&   <span1 className='error1'>{errors.cardnum}</span1>}</div>
                  <br/>
                  <div>&nbsp;{errors.email.length > 0 && errors.email != 'set' 
                  &&   <span1 className='error1'>{errors.email}</span1>}</div>
                  <br/>
                  <div>&nbsp;{errors.expmonth.length > 0 && errors.expmonth != 'set' 
                  &&   <span1 className='error1'>{errors.expmonth}</span1>}</div>
                  <div>&nbsp;{errors.expyear.length > 0 && errors.expyear != 'set' 
                  &&   <span1 className='error1'>{errors.expyear}</span1>}</div>
          </div>
        </div>
      
        
      </div>
      );  
  }
}


