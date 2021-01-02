import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import AddMessage from './components/AddMessage';
import AddFiles from './components/AddFiles';
import AddDate from "./components/AddDate";
import AddEmail from "./components/AddEmail";
import AlmostDone from "./components/AlmostDone";
import Review from "./components/Review";

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
                <Route exact path="/add_date">
                    <AddDate />
                </Route>
                <Route exact path="/add_email">
                    <AddEmail />
                </Route>
                <Route exact path="/almost_done">
                    <AlmostDone />
                </Route>
                <Route exact path="/review">
                    <Review />
                </Route>
            </Router>
        );
    }
}