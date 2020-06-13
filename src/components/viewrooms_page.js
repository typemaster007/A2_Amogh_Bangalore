import React, {Component, useRef} from "react";

import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Overlay from "./tools/overlay";

const greeting = 'Welcome to React';
export default class ViewRoom extends Component {
    
    
      render() {
        return (
            <div >
              <button class="btn btn-primary"  >
                room1
              </button>
      
            </div>
          );
      }
}