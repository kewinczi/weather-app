import React, { Component} from "react";
import Card from  './Card'
import { listOfCities } from '../constants';
class MainPage extends Component {
    constructor() {
        super();
        this.state = { 
            weather: [],
            isLoading: true,
            isError: false,
        }
        this.fetchWeatherForAllCities = this.fetchWeatherForAllCities.bind(this);
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
        const { weather, isLoading, isError } = this.state;
        const { numberOfCities } = this.props;
        return (
            <div>
                <div className="container">
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

export default MainPage;