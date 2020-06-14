import React from 'react';
import {Link} from 'react-router-dom';

class Form extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          title: '',
          body: '',
          author: '',
          BlogDetails: [
            {
                id: 1,
                title: 'Blog post1',
                author: 'John Doe',
                body: 'RentalVista was a great start to my room-finding journey'
            },    
            {
                id: 2,
                title: 'Blog post2',
                author: 'John Doe',
                body: 'RentalVista was a great start to my room-finding journey'
            },
            {
                id: 3,
                title: 'Blog post3',
                author: 'John Doe',
                body: 'RentalVista was a great start to my room-finding journey'
            },    
            {
                id: 4,
                title: 'Blog post3',
                author: 'John Doe',
                body: 'RentalVista was a great start to my room-finding journey'
            }, 
            {
                id: 5,
                title: 'Blog post3',
                author: 'John Doe',
                body: 'RentalVista was a great start to my room-finding journey'
            }, 
            {
                id: 6   ,
                title: 'Blog post3',
                author: 'John Doe',
                body: 'RentalVista was a great start to my room-finding journey'
            },  
        ]
        }
    
        this.handleChangeField = this.handleChangeField.bind(this);
      }
    
      handleChangeField(key, event) {
        this.setState({
          [key]: event.target.value,
        });
      }
    

  render() {

    const { title, body, author } = this.state;
    const displayBlog = this.state.BlogDetails;

    return (
      <div >
        <h1 style={{ display: 'flex',justifyContent: 'center', padding: '20px'}}> Blog Page</h1>
        <div className="container1" style= {{width: '600px',padding: '5px',margin: '10px', float: 'left'}}  >
        <h8 style={{ marginLeft: '35px',justifyContent: 'center'}}> Create a new Blog: </h8>
        <div className="col wrapper" style= {{display: 'flex'}}>
        <div className="col-7 " style={{ marginLeft: '1%', width: "150px"}}  >
            <input className="form-control my-3" onChange={(ev) => this.handleChangeField('title', ev)}
                value={title} placeholder="Article Title" style={{ width: '300px', float:'left', display: 'flex'}}/>
                

            <textarea className="form-control my-3" onChange={(ev) => this.handleChangeField('body', ev)}
             placeholder="Article Description" value={body} style={{ width: '300px'}}>
            </textarea>
            <input className="form-control my-3" onChange={(ev) => this.handleChangeField('author', ev)}
                value={author} placeholder="Article Author" style={{ width: '300px'}} />
            
            <button className="btn1 btn-primary">Submit</button>
            <Link className="btn1 btn-primary btn-inline" to={"/"} style={{marginLeft: '15px'}}>Cancel</Link>
        </div>
        <div className="col-6 " style={{ width: '180px'}}  >
            <br/>
            <div><span1 className='error1'>Error1</span1></div>
            <br/><br/>
            <div><span1 className='error1'>Error2</span1></div>
            <br/>
            <div><span1 className='error1'>Error3</span1></div>
                

        </div>
        </div>
        </div>
        <div className="container1" style= {{padding: '5px',margin: '10px', float: 'left'}}  >
        <h9 style={{ marginRight: '120px'}}> Current Blogs </h9>
        <div className="container1 " style= {{height: '300px',width: '500px', overflowY: 'scroll', margin: '5px'}}>
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