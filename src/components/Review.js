import React, {Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {Button} from "reactstrap";

// A component to allow the user to review their time capsule
// and send it to the server once done.
class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.nextPage = this.nextPage.bind(this);
        this.getMsgString = this.getMsgString.bind(this);
        this.getFileString = this.getFileString.bind(this);
        this.getDateString = this.getDateString.bind(this);
        this.getEmailString = this.getEmailString.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    // On button press, go to the review page
    nextPage() {
        this.props.history.push({
            pathname: '/review',
            state: this.props.location.state
        });
    }

    getMsgString() {
        const msg = this.props.location.state.message;
        if (msg.length === 0) {
            return "No Message";
        } else {
            return msg;
        }
    }

    getFileString() {
        const files = this.props.location.state.files;
        if (files == null) {
            return "No Files";
        } else if (files.length === 1) {
            return files[0].name;
        } else {
            return "Multiple Files";
        }
    }

    getDateString() {
        const date = this.props.location.state.date;
        const dateObj = new Date(date);
        return dateObj.toString();
    }

    getEmailString() {
        const email = this.props.location.state.email;
        if (email.length === 0) {
            return "No Email";
        } else {
            return email;
        }
    }

    // Send all data to the server.
    submitForm() {
        // Use axios to upload data
        axios.post("/submit",{
                message: this.props.location.state.message,
                files: this.props.location.state.files,
                date: this.props.location.state.date,
                email: this.props.location.state.email
            }).then((response) => {
                console.log("Done");

                // When upload is done, go to the final page.
                this.props.history.push('/finished');
            }, (error) => {
                console.log(error);
            }
        );
    }

    render() {
        return (
            <div>
                <div className="title">
                    <h1>Dear Future Self,</h1>
                </div>
                <div className="centerPanel">
                    <p>Your Message: {this.getMsgString()}</p>
                    <p>Your Files: {this.getFileString()}</p>
                    <p>Your Send Date: {this.getDateString()}</p>
                    <p>Your Email: {this.getEmailString()}</p>
                    <Button color="primary" onClick={this.submitForm}>Submit</Button>{' '}
                </div>
            </div>
        );
    }
}

export default withRouter(Review);