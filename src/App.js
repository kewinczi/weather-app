import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import Card from  './components/Card'

class App extends Component {
    constructor() {
        super();
        this.state = { 
            weather: [],
            isLoading: true 
        }
    }
    
    fetchWeatherForCity(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=84aea1ab45e8d501835d9128346165db`)
            .then(response => response.json())
            .then(response => {
                const weather = [...this.state.weather, response]
                this.setState({ weather, isLoading: false })
            })
    }
    componentDidMount() {
        this.fetchWeatherForCity("Aveiro");
        this.fetchWeatherForCity("Wroclaw");
        this.fetchWeatherForCity("Porto");
        this.fetchWeatherForCity("Rybnik");

    }

    render() {
        return (
            <div className="container text-light">
                <div className="row d-flex justify-content-center">
                    {
                        this.state.isLoading ? <h1>Loading</h1> : 
                        this.state.weather.map((city, index) => {
                            return <Card key={index} weather={city} />
                        })
                    }
                </div>
            </div>
        );
    }

}

export default hot(module)(App);