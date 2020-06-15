import React from 'react';
import {Link} from 'react-router-dom';
import Popup from "reactjs-popup";

let flag = 0;
const validateForm = (errors) => {
    let valid = false;
    Object.values(errors).forEach(      // if we have an error string set valid to false
      (val) => 
      { if(val=='set' && flag == 1)
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

class Form extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          formValid: false,
          errorCount: null,
          title: null,
          desc: null,
          author: null,
          id: null,
          
          BlogDetails: [
            {
                id: 1,
                title: 'Blog post 1',
                author: 'John Doe',
                desc: 'RentalVista was a great start to my room-finding journey'
            },    
            {
                id: 2,
                title: 'Blog post 2',
                author: 'John Doe',
                desc: 'RentalVista was a good start to my room-finding journey'
            },
            {
                id: 3,
                title: 'Blog post 3',
                author: 'John Doe',
                desc: 'RentalVista was a nice start to my room-finding journey'
            },    
            {
                id: 4,
                title: 'Blog post 4',
                author: 'John Doe',
                desc: 'RentalVista was an amazing start to my room-finding journey'
            }, 
            {
                id: 5,
                title: 'Blog post 5',
                author: 'John Doe',
                desc: 'RentalVista was a splendid start to my room-finding journey'
            }, 
            {
                id: 6   ,
                title: 'Blog post 6',
                author: 'John Doe',
                desc: 'RentalVista was a fine start to my room-finding journey'
            },              
        ],
        errors: {
            title: '',
            desc: '',
            author: '',
        },       

        };
    
      }
    
      
      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;   
      
        switch (name) {
            case 'title': 
                if((!event.target.value.match(/^[a-zA-Z ]+$/i)))
                {
                    event.target.value = event.target.value.replace(/[^A-Za-z]/ig, '')
                }
                else{
                    errors.title = 
                    value.length < 5 
                    ? 'Min 5 alphabetic characters!'
                    : 'set';
                    if (value.length>=5) {flag = 1;} else{ flag=0;}
                }
                break;
            
            case 'desc': 
                if((!event.target.value.match(/^[a-zA-Z .]+$/i)))
                {
                    event.target.value = event.target.value.replace(/[^A-Za-z]/ig, '')
                }
                else{
                    errors.desc = 
                    value.length < 2  
                    ? 'Enter some text!'
                    : 'set';
                    if (value.length>=2) {flag = 1;} else{ flag=0;}
                }
                break;
            
            case 'author': 
                if((!event.target.value.match(/^[a-zA-Z .]+$/i)))
                {
                    event.target.value = event.target.value.replace(/[^A-Za-z]/ig, '')
                }
                else{
                    errors.author = 
                    value.length < 5 
                    ? 'Min 5 alphabetic characters!'
                    : 'set';
                    if (value.length>=5) {flag = 1;} else{ flag=0;}
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
    const displayBlog = this.state.BlogDetails;

    return (
      <div >
        <h1 style={{ display: 'flex',justifyContent: 'center', padding: '20px'}}> Blog Page</h1>
        <div className="container1" style= {{width: '600px',padding: '5px',margin: '10px', float: 'left',border: '2px solid black', borderRadius: '0.25rem', height: '350px'}}  >
        <form onSubmit={this.handleSubmit} noValidate style={{width: '600px'}} >
            <h8 style={{ marginLeft: '35px',justifyContent: 'center'}}> Create a new Blog: </h8>
            <div className="col wrapper" style= {{display: 'flex'}}>
            <div className="col-7 " style={{ marginLeft: '1%', width: "150px"}}  >
                <label1 className="label1" style={{ margin: 'none!important'}}>Title:</label1>
                <input className="form-control mb-2" onChange={this.handleChange} noValidate  name="title" 
                placeholder="Article Title" style={{ width: '300px', display: 'flex'}}/>
                
                <label1 className="label1" style={{ margin: 'none!important'}}>Description:</label1>            
                <textarea className="form-control mb-2 " onChange={this.handleChange} noValidate
                placeholder="Article Description" name='desc'  style={{ width: '300px'}}>
                </textarea>
                <label1 className="label1" style={{ margin: 'none!important'}}>Author:</label1>
                <input className="form-control mb-2" onChange={this.handleChange} noValidate
                    placeholder="Article Author" name="author" style={{ width: '300px'}} />
                
                <Popup trigger={<button className="btn1 btn-primary">Submit</button>} 
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

                <Link className="btn1 btn-primary btn-inline" to={"/"} style={{marginLeft: '15px'}}>Cancel</Link>
            </div>
            <div className="col-6 " style={{ width: '180px'}}  >
                <br/>
                <div>&nbsp;{errors.title.length > 0 && errors.title !== 'set' 
                    &&  <span1 className='error1'>{errors.title}</span1>}</div>
                <br/><br/>
                <div>&nbsp;{errors.desc.length > 0 && errors.desc !== 'set' 
                    &&  <span1 className='error1'>{errors.desc}</span1>}</div>
                <br/><br/><br/>
                <div>&nbsp;{errors.author.length > 0 && errors.author !== 'set' 
                    &&  <span1 className='error1'>{errors.author}</span1>}</div>
                <br/>           
                    

            </div>
            </div>
            </form>
        </div>
        <div className="container1" style= {{margin: '10px',height: "350px", float: 'left',border: '2px solid black', borderRadius: '0.25rem'}}  >
        <h9 style={{ marginRight: '120px'}}> Current Blogs </h9>
        <div className="container1 " style= {{height: '290px',width: '500px', overflowY: 'scroll', margin: '5px'}}>
                {
                    // console.log(displayCountry)
                    displayBlog.map(blog => {
                        let newColor = ""
                        switch(blog.id % 9) {
                            case 1:
                                newColor="bg-warning text-dark"; 
                                break;
                            case 2:
                                newColor="bg-secondary text-light"; 
                                break;
                            case 3:
                                newColor="bg-danger text-light"; 
                                break;
                            case 4:
                                newColor="bg-info text-light"; 
                                break;
                            case 5:
                                newColor="bg-success text-light"; 
                                break;
                            case 6:
                                newColor="bg-primary text-light"; 
                                break;
                            case 7:
                                newColor="bg-dark text-light"; 
                                break;
                            case 8:
                                newColor="bg-warning text-dark"; 
                                break;
                            default:
                                newColor="bg-light";
                                break
                        }
                        return (
                            <div key={blog.id} className="col col-sm-4 " 
                                style={{width: "200px",float:"left", marginLeft: '25px', marginRight: '25px', marginBottom: '0px', marginTop: '0px'}}>
                                <div className={"card "+newColor} style= {{width: "200px",margin: '5px'}}>
                                    <div className="card-body" key={blog.id} style={{width: "200px",margin: '5px'}} >
                                        <h8 className="card-title">{blog.title}</h8>
                                        <hr />
                                        <p1 className="card-text">
                                            Author: {blog.author}
                                        </p1>
                                        <hr />
                                        <p1 className="card-text">
                                            Description: {blog.desc}
                                        </p1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        
        </div>
      </div>
    )
  }
}

export default Form;