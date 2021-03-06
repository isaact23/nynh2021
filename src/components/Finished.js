import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import person_cheering from "../img/person-cheering.png"

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
                        <img src={person_cheering}/>
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