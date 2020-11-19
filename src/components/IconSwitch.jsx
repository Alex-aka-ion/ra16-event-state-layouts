import React, { Component } from "react";
import './IconSwitch.css';

class IconSwitch extends Component {
    render () {
        return <div className="iconSwitch">
            <span className="material-icons" onClick={this.props.onSwitch}>
                {this.props.icon}
            </span>
        </div>
    }
}

export default IconSwitch;
