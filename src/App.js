import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import Card from  './components/Card'
import { listOfCities } from './constants';
import Navbar from './components/Navbar';

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
    }
    
    setNumberOfCities(number) {
        this.setState({numberOfCities: number})
    }

    fetchWeatherForCity(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d99157026a1814b598c98bc8bc02fa34`)
            .then(response => response.json())
            .then(response => {
                const weather = [...this.state.weather, response]
                this.setState({ 
                    weather, 
                    isLoading: false,
                    isError: false
                })
            }).catch(()=>{
                this.setState({isError: true});
            })
    }

    fetchWeatherForAllCities() {
        listOfCities.forEach((item) => {
            this.fetchWeatherForCity(item);
        })
    }
    
    componentDidMount() {
        this.fetchWeatherForAllCities();
    }

    render() {
        const { weather, isLoading, isError, numberOfCities } = this.state;
        return (
            <div>
                <Navbar setNumberOfCities={this.setNumberOfCities}/>
                <div className="container text-light">

                    <div className="row d-flex justify-content-center">
                        {
                            isLoading && !isError ? <h1>Loading...</h1> : 
                            weather.slice(0,numberOfCities).map((city, index) => {
                                return <Card key={index} weather={city} />
                            })
                        }
                        {
                            isError ? <h1>Error!</h1> : <div></div>
                        }
                    </div>
                </div>
            </div>

        );
    }

}

export default hot(module)(App);