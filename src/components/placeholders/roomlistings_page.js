import React, {Component, useRef} from "react";

import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Overlay from "../tools/overlay";

const greeting = 'Welcome to React';
export default class Roomlistings extends Component {
    
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      render() {
        return (
            <div >
              <div style={{padding:'25px'}}>
                <h2> This is the placeholder for RoomListings page </h2>
              
                                   
            </div>
            <br/><br/><br/><br/>
            <div>
            <Link  className="btn btn-primary" to={"/home"} style={{marginLeft : '300px'}} >Back to Home</Link>   
            </div>
            </div>  
          );
      }
}