import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';


// The file upload box and handler.
class AddFiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
        }

        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handle updated file selection
    handleFileSelect = (event) => {
        const fileName = event.target.files;
        this.setState({
            selectedFile: fileName,
            loaded: 0,
        })
    }

    // Handle the 'upload' button click
    handleSubmit = (event) => {
        const fileData = new FormData()

        // Loop through all uploaded files and append to data
        if (this.state.selectedFile != null) {
            for (var x = 0; x < this.state.selectedFile.length; x++) {
                fileData.append('file', this.state.selectedFile[x])
            }
        }
        // Go to date/time selection page and preserve data
        this.props.history.push({
            pathname: '/add_date',
            state: {
                message: this.props.location.state.message,
                files: "File Data" // TODO: Put the actual files in here
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
                        <img src="/img/man-holding-box.png"/>
                    </div>
                    <div className="addMessageRightSide">
                        <h2>What do you want to send yourself?</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>Files:</label>
                            <input type="file" className="form-control" name="file" multiple
                                   onChange={this.handleFileSelect}/>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddFiles);