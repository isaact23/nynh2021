import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import tech_image from "../img/tech.png"

// A component for the user to input email.
class AddEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {email: ''};
    }

    // Handle updated email
    handleUpdate = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    // Handle email submission
    handleSubmit = () => {
        // Go to email selection page
        this.props.history.push({
            pathname: '/almost_done',
            state: {
                message: this.props.location.state.message,
                files: this.props.location.state.files,
                date: this.props.location.state.date,
                email: this.state.email
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
                        <img src={tech_image}/>
                    </div>
                    <div className="addMessageRightSide">
                        <h2>Where are you sending this to?</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>Add your email</label>
                            <input type="text" onChange={this.handleUpdate} />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddEmail);