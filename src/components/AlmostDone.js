import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button} from "reactstrap";

// A component for the user to input email.
class AlmostDone extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.nextPage = this.nextPage.bind(this);
    }

    // On button press, go to the review page
    nextPage() {
        this.props.history.push({
            pathname: '/review',
            state: this.props.location.state
        });
    }

    render() {
        return (
            <div>
                <div className="title">
                    <h1>Dear Future Self,</h1>
                </div>
                <div className="centerPanel">
                    <div className="addMessageLeftSide">
                        <img src="/img/person-sitting-laptop.png"/>
                    </div>
                    <div className="addMessageRightSide">
                        <h2>You're almost done!</h2>
                    </div>
                    <Button color="primary" onClick={this.nextPage}>Review your letter</Button>{' '}
                </div>
            </div>
        );
    }
}

export default withRouter(AlmostDone);