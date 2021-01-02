import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import AddMessage from './components/AddMessage';
import AddFiles from './components/AddFiles';
import WhenToSend from "./components/WhenToSend";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            files: null
        }
    }

    render () {
        return (
            <Router>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/add_message">
                    <AddMessage />
                </Route>
                <Route exact path="/add_files">
                    <AddFiles />
                </Route>
                <Route exact path="/when_to_send">
                    <WhenToSend />
                </Route>
            </Router>
        );
    }
}