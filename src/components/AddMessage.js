import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Component to take a text-based user input to store.
class AddMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({message: event.target.value});
    }

    // Handle text box submission
    handleSubmit = (event) => {
        // Go to file selection page
        this.props.history.push({
            pathname: '/add_files',
            state: {
                message: this.state.message
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
                        <img src="/img/person-writing.png"/>
                    </div>
                    <div className="addMessageRightSide">
                        <h2>What do you want to send yourself?</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Message:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddMessage);