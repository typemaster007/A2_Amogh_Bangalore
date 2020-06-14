import React from 'react';
import {Link} from 'react-router-dom';

class Form extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          title: null,
          author: null,
          body: null,
          
          BlogDetails: [
            {
                id: 1,
                title: 'Blog post 1',
                author: 'John Doe',
                body: 'RentalVista was a great start to my room-finding journey'
            },    
            {
                id: 2,
                title: 'Blog post 2',
                author: 'John Doe',
                body: 'RentalVista was a good start to my room-finding journey'
            },
            {
                id: 3,
                title: 'Blog post 3',
                author: 'John Doe',
                body: 'RentalVista was a nice start to my room-finding journey'
            },    
            {
                id: 4,
                title: 'Blog post 4',
                author: 'John Doe',
                body: 'RentalVista was an amazing start to my room-finding journey'
            }, 
            {
                id: 5,
                title: 'Blog post 5',
                author: 'John Doe',
                body: 'RentalVista was a splendid start to my room-finding journey'
            }, 
            {
                id: 6   ,
                title: 'Blog post 6',
                author: 'John Doe',
                body: 'RentalVista was a fine start to my room-finding journey'
            },              
        ],
        errors: {
            title: '',
            author: '',
            body: '',
        },       

        }
    
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
                    value.length < 5 || !(value.match(/^[a-zA-z ]+$/i))
                    ? 'Min 5 alphabetic characters!'
                    : 'set';
                }
                break;

            case 'author': 
                if((!event.target.value.match(/^[a-zA-Z .]+$/i)))
                {
                    event.target.value = event.target.value.replace(/[^A-Za-z]/ig, '')
                }
                else{
                    errors.title = 
                    value.length < 5 || !(value.match(/^[a-zA-z .]+$/i))
                    ? 'Min 5 alphabetic characters!'
                    : 'set';
                }
                break;

            case 'desc': 
                    if((!event.target.value.match(/^[a-zA-Z .]+$/i)))
                    {
                        event.target.value = event.target.value.replace(/[^A-Za-z]/ig, '')
                    }
                    else{
                        errors.title = 
                        value.length == 0 || !(value.match(/^[a-zA-z .]+$/i))
                        ? 'Enter some text!'
                        : 'set';
                    }
                    break;

            default:
                break;

            }
            this.setState({errors, [name]: value}, ()=> {
                console.log(errors)
            })
        }
    

  render() {

    const { title,author,body } = this.state;
    const {errors, formValid} = this.state;
    const displayBlog = this.state.BlogDetails;

    return (
      <div >
        <h1 style={{ display: 'flex',justifyContent: 'center', padding: '20px'}}> Blog Page</h1>
        <div className="container1" style= {{width: '600px',padding: '5px',margin: '10px', float: 'left',border: '2px solid black', borderRadius: '0.25rem', height: '350px'}}  >
        <h8 style={{ marginLeft: '35px',justifyContent: 'center'}}> Create a new Blog: </h8>
        <div className="col wrapper" style= {{display: 'flex'}}>
        <div className="col-7 " style={{ marginLeft: '1%', width: "150px"}}  >
            <label1 className="label1" style={{ margin: 'none!important'}}>Title:</label1>
            <input className="form-control mb-2" onChange={this.handleChange} noValidate  name="title" 
            value={title} placeholder="Article Title" style={{ width: '300px', display: 'flex'}}/>
            
            <label1 className="label1" style={{ margin: 'none!important'}}>Description:</label1>            
            <textarea className="form-control mb-2 " onChange={this.handleChange} noValidate
             placeholder="Article Description" name='desc' value={body} style={{ width: '300px'}}>
            </textarea>
            <label1 className="label1" style={{ margin: 'none!important'}}>Author:</label1>
            <input className="form-control mb-2" onChange={this.handleChange} noValidate
                value={author} placeholder="Article Author" name="author" style={{ width: '300px'}} />
            
            <button className="btn1 btn-primary">Submit</button>
            <Link className="btn1 btn-primary btn-inline" to={"/"} style={{marginLeft: '15px'}}>Cancel</Link>
        </div>
        <div className="col-6 " style={{ width: '180px'}}  >
            <br/>
            <div>&nbsp;{errors.title.length > 0 && errors.title !== 'set' 
                  &&  <span1 className='error1'>{errors.title}</span1>}</div>
            <br/><br/>
            <div>&nbsp;{errors.author.length > 0 && errors.author !== 'set' 
                  &&  <span1 className='error1'>{errors.author}</span1>}</div>
            <br/>
            <div>&nbsp;{errors.body.length > 0 && errors.body !== 'set' 
                  &&  <span1 className='error1'>{errors.body}</span1>}</div>
                

        </div>
        </div>
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
                                            Description: {blog.body}
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