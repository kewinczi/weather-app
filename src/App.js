import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import Navbar from './components/Navbar';
import MainPage from "./components/MainPage";
import Settings from "./components/Settings";
import { listOfCities } from './constants';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    constructor() {
        super();
        this.state = { 
            weather: [],
            isLoading: true,
            isError: false,
            numberOfCities: 1
        }
        this.setNumberOfCities = this.setNumberOfCities.bind(this);
        this.fetchWeatherForAllCities = this.fetchWeatherForAllCities.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.addCity = this.addCity.bind(this);
        this.replaceCity = this.replaceCity.bind(this);

    }

    setNumberOfCities(number) {
        this.setState({numberOfCities: number})
    }

    fetchWeatherForCity(city, func, index) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d99157026a1814b598c98bc8bc02fa34`)
            .then(response => response.json())
            .then(response => {
                func(response, index);
                this.setState({ 
                    isLoading: false,
                    isError: false
                })
            }).catch(()=>{
                this.setState({isError: true});
            })
    }

    replaceCity(response, index) {
        const weather = [...this.state.weather]
        weather[index] = response
        this.setState({weather})
    }

    addCity(response) {
        const weather = [...this.state.weather, response];
        this.setState({weather});
    }

    fetchWeatherForAllCities() {
        listOfCities.forEach((item) => {
            this.fetchWeatherForCity(item, this.addCity);
        })
    }

    
    componentDidMount() {
        this.fetchWeatherForAllCities();
    }

    changeCity() {
        const index = 0
        const city = "Oslo";
        this.fetchWeatherForCity(city, this.replaceCity, index);
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
                <button onClick={this.changeCity}>Cities</button>
            </div>

        );
    }

}

export default hot(module)(App);