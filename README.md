# Assignment 2


* Date Created: 10 JUN 2020
* Last Modification Date: 14 JUN 2020


* [Amogh Adithya Bangalore](am210633@dal.ca) - (Web development)



## Getting Started


### Prerequisites

Give examples or provide a list of the required software / libraries / plug-ins


See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing
In the project directory, you can run:

npm install

npm start

```
Give the example
```

Once the installation is complete, Open http://localhost:3000 to view it in the browser.



## Deployment

This application is deployed on Heroku. The link is : https://a2-amogh-bangalore.herokuapp.com/home

## Built With

Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below 

* [ReactJS](https://reactjs.org/docs/getting-started.html) - The web framework used

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### signup_component.js
The below lines were used to validate email input fields based on regex pattern.
Lines 06 - 07
```
const validEmailRegex = 
  RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

```

The code above was created by adapting the code in [stackoverflow](https://stackoverflow.com/questions/38091894/regular-expression-for-email-not-working) as shown below: 

```
  var regExpEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

```

- <!---How---> The code in [stackoverflow](https://stackoverflow.com/questions/38091894/regular-expression-for-email-not-working) was implemented by Nikhil Ghuse
- <!---Why---> [stackoverflow](https://stackoverflow.com/questions/38091894/regular-expression-for-email-not-working)'s Code was used because the regex pattern used previously was not working
- <!---How---> [stackoverflow](https://stackoverflow.com/questions/38091894/regular-expression-for-email-not-working)'s Code was modified by adding pattern matches to accept numbers and special characters


### blog_page.js

Lines ## - ##
---------------

```
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

```

The code above was created by adapting the code in [Cloudboost](https://blog.cloudboost.io/learn-how-to-create-a-simple-blog-with-react-node-c05fa6889de3) as shown below: 

```
<div className="col-12 col-lg-6 offset-lg-3">
        <input className="form-control my-3" placeholder="Article Title" />
        <textarea className="form-control my-3" placeholder="Article Description">
        </textarea>
        <input className="form-control my-3" placeholder="Article Author" />
        <button className="btn btn-primary float-right">Submit</button>
</div>

```

- [How] The code in [NAME](link) was implemented by Antonio Erdeljac
- [Why] [NAME](link) Code was used because a simplistic article submission layout for the blog page that could be modified upon was required.
- [How] [NAME](link) Code was modified by adding titles, layout changes, css changes, function handlers and new components(links, buttons)



## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
