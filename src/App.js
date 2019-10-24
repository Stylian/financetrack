import React, {Component} from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import LandingPage from "./components/datafromfootie/history_components/LandingPage";
import Admin from "./components/datafromfootie/Admin";
import Season from "./components/datafromfootie/history_components/Season";
import Team from "./components/datafromfootie/history_components/Team";
import Group from "./components/datafromfootie/history_components/Group";
import Players from "./components/datafromfootie/history_components/Players";
import Stats from "./components/datafromfootie/history_components/Stats";
import Statistics from "./components/datafromfootie/history_components/Statistics";
import Coefficients from "./components/datafromfootie/history_components/Coefficients";
import Player from "./components/datafromfootie/history_components/Player";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageTitle: "Landing Page",
        };

    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/season/:seasonNum' component={Season}/>
            </BrowserRouter>
        );
    }
}

export default App;
