import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// A component for the user to input the date and time of message sending.
class WhenToSend extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // Handle updated file selection
    handleUpdate = (event) => {
        this.setState({
            dateTime: event.target.value
        })
        console.log(this.state.dateTime);
    }

    // Handle the 'upload' button click
    handleSubmit = () => {

    }

    render() {
        return (
            <div>
                <div className="title">
                    <h1>Dear Future Self,</h1>
                </div>
                <div className="centerPanel">
                    <div className="addMessageLeftSide">
                        <img src="/img/man-holding-box.png"/>
                    </div>
                    <div className="addMessageRightSide">
                        <h2>When do you want to send this to yourself? (Timezone UTC)</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>Date/time to send:</label>
                            <input type="datetime-local" onChange={this.handleUpdate} />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(WhenToSend);