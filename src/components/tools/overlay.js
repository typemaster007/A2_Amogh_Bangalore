import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class Overlay extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
      render() {
        if (!this.props.show) {
          return null;
        }
        return (
          
            <>{['bottom'].map((placement) => (
                        <OverlayTrigger
                        key="bottom"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                            <strong>{this.props.greeting}</strong>.
                            </Tooltip>
                        }
                        >
                        <Button className="Button primary" variant="secondary">Help</Button>
                        </OverlayTrigger>
                    ))}
                </>
          
        );
      }
}
Overlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};