## Assignment 2

* Date Created: 10 JUN 2020
* Last Modification Date: 14 JUN 2020

## Author
* [Amogh Adithya Bangalore](am210633@dal.ca)[B00833535] - (Web development)

## Links
This Assignment is avaliable on:
* Heroku : https://a2-amogh-bangalore.herokuapp.com/home
* Git    : https://github.com/typemaster007/A2_Amogh_Bangalore.git

## Explanantion
The web assignment is aimed at creating four front-end web features of the project that was chosen in the previous assignment.
The pages that were chosen for this assignment are:
|      Feature Name         				   | 							Route                                     |
|----------------------------------------------|-----------------------------------------------------------------------|
| 1. Landing Page (Home Page) (Mandatory)      | Route: "/home"       |
| 2. Registration Page (Sign-up) (Mandatory)   | Route: "/register"      |
| 3. Payments Page    						   | Route: "/payments"    |
| 4. Blogs Page    							   | Route: "/blogs"    |

Supporting page: search_complete.js
## Flow of control:
1. Once the landing page is loaded, you will see the RentalVista logo and the navigation bar with multiple options - (Register, Blog, Payments, etc.)
2. The search bar in the middle-left of the landing page is used to run the search for locations for the user.
3. The user can enter the query location and will be navigated to the placeholder room views page.
4. By pressing the home button on the top left, the user can return to the landing area and try the 3 remaining features.
5. The register option will redirect the user to the sign-up page which is incorporated with sign up validations.
6. The Blogs option will navigate the user to the blogs page, where the user can create a blog for submission and browse other blogs.
7. The Payments option will navigate the user to the Payments page, where the user can enter the payment details with validations.
8. The homepage has the available options highlighted active which will make it user for the marker to navigate active pages.
## Files Inlcuded
--------------------------------------------------
1. home_page.js (Landing Page) Route: "/home" 
2. signup_component.js (Signup Page) Route: "/register"
3. payments_page.js (Payments Page) Route: "/payments"
4. blog_page.js (Blogs Page) "/blogs"
--------------------------------------------------
Under Folder "Tools" these are supporting files
1. validate_card.js - {For validating credit card number in Payments Page}
2. overlay.js - {For placing Overlay tooltip pointers on future/Unfinished links}
3. modalcomp - {For creating modal popups}
--------------------------------------------------
Placeholder pages which are kept for future additions to the assignment are placed in the "Placeholder" folder
1. login_component.js
2. roomlistings_page.js
3. viewrooms_page.js
---------------------------------------------------
## Css
1. App.css
2. modal.css
3. paycss.css
---------------------------------------------------
## Images
1. amex.svg
2. discover.svg 
3. logo_web.png
4. mastercard.svg
5. room1.jpg
6. room2.jpg
7. visa.svg
---------------------------------------------------
### Prerequisites


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

## signup_component.js
The below lines were used to validate email input fields based on regex pattern.
Lines ##06 - 07## 
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


## blog_page.js

Lines ##130 - 145##
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

- [How] The code in [Cloudboost](https://blog.cloudboost.io/learn-how-to-create-a-simple-blog-with-react-node-c05fa6889de3) was implemented by Antonio Erdeljac
- [Why] [Cloudboost](https://blog.cloudboost.io/learn-how-to-create-a-simple-blog-with-react-node-c05fa6889de3) Code was used because a simplistic article submission layout for the blog page that could be modified upon was required.
- [How] [Cloudboost](https://blog.cloudboost.io/learn-how-to-create-a-simple-blog-with-react-node-c05fa6889de3) Code was modified by adding titles, layout changes, css changes, function handlers and new components(links, buttons)


## payments_page.js

Lines ##247 - 259##
---------------
```
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

```

The code above was created by adapting the code in [ReactJS-popup](https://react-popup.elazizi.com/getting-started/) as shown below: 

```
<Popup trigger={<button>Trigger</button>} position="top left">
    {close => (
      <div>
        Content here
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>

```

- [How] The code in [ReactJS-popup](https://react-popup.elazizi.com/getting-started/) was implemented by Y Jose
- [Why] [ReactJS-popup](https://react-popup.elazizi.com/getting-started/) Code was used to get a base layout of the popup model which is lightweight.
- [How] [ReactJS-popup](https://react-popup.elazizi.com/getting-started/) Code was modified by adding CSS, Close conditions, Layout changes, popup trigger c         conditions from the original boiler code.




## Acknowledgments

* https://www.w3schools.com/js/js_validation.asp
* https://www.npmjs.com/package/reactjs-popup
* https://blog.heroku.com/deploying-react-with-zero-configuration
* 
