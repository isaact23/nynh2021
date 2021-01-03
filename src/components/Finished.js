import React, {Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {Button} from "reactstrap";

// A component for the user to input email.
class Review extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="title">
                    <h1>Dear Future Self,</h1>
                </div>
                <div className="centerPanel">
                    <div className="addMessageLeftSide">
                        <img src="/img/person-cheering.png"/>
                    </div>
                    <div className="addMessageRightSide">
                        <h2>Your time capsule letter is set!</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Review);