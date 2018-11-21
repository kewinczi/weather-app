import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import Card from  './components/Card'
import Settings from './components/Settings';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            weather: [],
            isLoading: true,
            numberOfCities: 1
        }
        this.setNumberOfCities = this.setNumberOfCities.bind(this);
    }
    
    setNumberOfCities(number) {
        this.setState({numberOfCities: number})        
    }

    fetchWeatherForCity(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=84aea1ab45e8d501835d9128346165db`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const weather = [...this.state.weather, response]
                this.setState({ weather, isLoading: false })
            })
    }

    fetchForecastForCity(city) {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=84aea1ab45e8d501835d9128346165db`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }
    
    componentDidMount() {
        this.fetchWeatherForCity("Aveiro");
    }

    render() {
        const { weather, isLoading } = this.state;
        return (
            <div className="container text-light">
                <Settings setNumberOfCities={this.setNumberOfCities} x="a"/>
                <div className="row d-flex justify-content-center">
                    {
                        isLoading ? <h1>Loading</h1> : 
                        weather.map((city, index) => {
                            return <Card key={index} weather={city} />
                        })
                    }
                </div>
            </div>
        );
    }

}

export default hot(module)(App);