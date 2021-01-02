import React, {Component} from 'react';
import axios from 'axios';

/**
 * The file upload box and handler.
 */
class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            uploadStarted: false
        }
    }

    // Handle updated file selection
    fileSelectHandler = event => {
        const fileName = event.target.files;
        this.setState({
            selectedFile: fileName,
            loaded: 0,
        })
    }

    // Handle the 'upload' button click
    uploadClickHandler = () => {
        if (!this.state.uploadStarted) {
            this.setState({
                uploadStarted: true
            })
            const data = new FormData()

            // Loop through all uploaded files and append to data
            for (var x = 0; x < this.state.selectedFile.length; x++) {
                data.append('file', this.state.selectedFile[x])
            }

            // Use axios to upload data
            axios.post("http://localhost:8000/submit", data, {
            })
                .then(res => { // then print response status
                    console.log(res.statusText)
                })
        }
    }

    render() {
        return (
            <div>
                <input type="file" class="form-control" name="file" multiple onChange={this.fileSelectHandler}/>
                <button type="button" className="btn btn-success btn-block" onClick={this.uploadClickHandler}>Upload</button>
            </div>
        );
    }
}

export default FileUpload;