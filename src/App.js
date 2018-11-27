import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import Navbar from './components/Navbar';
import MainPage from "./components/MainPage";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    constructor() {
        super();
        this.state = { 
            numberOfCities: 1
        }
        this.setNumberOfCities = this.setNumberOfCities.bind(this);
    }


    setNumberOfCities(number) {
        this.setState({numberOfCities: number})
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navbar />
                        <Route 
                            exact path="/" 
                            render={()=> (
                                <MainPage numberOfCities={this.state.numberOfCities} />
                            )}
                        />
                        <Route 
                            path="/settings"
                            render={()=> (
                                <Settings setNumberOfCities={this.setNumberOfCities}
                                    numberOfCities={this.state.numberOfCities}  
                                />
                            )}
                        />
                    </div>
                </Router>

            </div>

        );
    }

}

export default hot(module)(App);