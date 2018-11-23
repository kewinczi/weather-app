import React, { Component} from "react";

class Card extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { weather } = this.props;
        return (
            <div className="col-lg-4 col-md-6 d-flex justify-content-center my-3">
                <div className="card text-center h-100 d-inline-block rounded-0 border-0">
                    <div className="card-body">
                        <h1 className="card-title display-4">{weather.name}</h1>
                        <div className="row">
                            <div className="col align-self-end">
                                <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}></img>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <h2 className="display-4">{weather.main.temp}&deg;C</h2>
                            </div>
                        </div>
                        <div className="m-3">
                            <div className="text-left">
                                <h6 className="d-inline">humidity: </h6><p className="d-inline">{weather.main.humidity}</p>
                            </div>
                            <div className="text-left">
                                <h6 className="d-inline">pressure: </h6><p className="d-inline">{weather.main.pressure}</p>
                            </div>
                            <div className="text-left">
                                <h6 className="d-inline">temp. max: </h6><p className="d-inline">{weather.main.temp_max}</p>
                            </div>
                            <div className="text-left">
                                <h6 className="d-inline">temp. min: </h6><p className="d-inline">{weather.main.temp_min}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;