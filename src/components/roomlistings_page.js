import React, {Component, useRef} from "react";

import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Overlay from "./tools/overlay";

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
              <div>
              <button class="toggle-button" id="centered-toggle-button" onClick={e => {
                  this.showModal(e);
                }}
              >
                {" "}
                show Modal{" "}
              </button>
              <Overlay greeting={greeting} onClose={this.showModal} show={this.state.show}>
                <OverlayTrigger/>
              </Overlay>                        
            </div>
            <br/><br/><br/><br/>
            <div>
            <Link  className="btn btn-primary" to={"/viewroom"} style={{marginLeft : '10px'}} >View room 1</Link>   
            </div>
            </div>  
          );
      }
}