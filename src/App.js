import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import Navbar from './components/Navbar';
import MainPage from "./components/MainPage";
import Settings from "./components/Settings";
import { listOfCities } from './constants';
import { handleErrors } from "./helpers";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    constructor() {
        super();
        this.state = { 
            weather: [],
            isLoading: false,
            isError: false,
            numberOfCities: 1
        }
        this.setNumberOfCities = this.setNumberOfCities.bind(this);
        this.fetchWeatherForAllCities = this.fetchWeatherForAllCities.bind(this);
        this.changeCity = this.changeCity.bind(this);

    }

    setNumberOfCities(number) {
        this.setState({numberOfCities: number})
    }

    fetchWeatherForCity(city) {
        this.setState({ 
            isLoading: true
        });
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d99157026a1814b598c98bc8bc02fa34`)
            .then(handleErrors)
            .then(response => response.json())
            .then(response => {
                const weather = [...this.state.weather, response];
                this.setState({ weather, isLoading: false, isError: false })
            }).catch(()=>{
                this.setState({ isError: true, isLoading: false });
            })
    }

    fetchWeatherForAllCities() {
        listOfCities.forEach((city) => {
            this.fetchWeatherForCity(city);
        })
    }

    componentDidMount() {
        this.fetchWeatherForAllCities();
    }

    changeCity(city, index) {
        const weather = [...this.state.weather]
        weather[index] = city
        this.setState({weather})
    };

    render() {
        const { weather, isLoading, isError, numberOfCities } = this.state;
        return (
            <div>
                <Router>
                    <div>
                        <Navbar />
                        <Route 
                            exact path="/" 
                            render={()=> (
                                <MainPage 
                                    numberOfCities={numberOfCities} 
                                    weather={weather}
                                    isLoading={isLoading}
                                    isError={isError}
                                    changeCity={this.changeCity}
                                />
                            )}
                        />
                        <Route 
                            path="/settings"
                            render={()=> (
                                <Settings setNumberOfCities={this.setNumberOfCities}
                                    numberOfCities={numberOfCities}  
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