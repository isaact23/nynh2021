import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

// A component for the user to input the date and time of message sending.
class AddDate extends Component {

    constructor(props) {
        super(props);
        this.state = {date: "2022-01-01T00:00"};
    }

    // Handle updated date/time
    handleUpdate = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    // Handle date/time submission
    handleSubmit = () => {
        // Go to email selection page
        this.props.history.push({
            pathname: '/add_email',
            state: {
                message: this.props.location.state.message,
                files: this.props.location.state.files,
                date: this.state.date
            }
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
                        <img src="/img/time.png"/>
                    </div>
                    <div className="addMessageRightSide">
                        <h2>When do you want to send this to yourself? (Timezone UTC)</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>Date/time to send:</label>
                            <input type="datetime-local" value={this.state.date} onChange={this.handleUpdate} />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddDate);