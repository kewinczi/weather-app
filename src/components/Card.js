import React, { Component} from "react";

class Card extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { weather } = this.props;
        return (
            <div className="col-lg-4 col-md-6 d-flex justify-content-center my-3">
                <div className="card text-center h-100 d-inline-block rounded-0 border-0" style={{width: '350px', backgroundColor: 'rgba(20,20,255,0.2)'}}>
                    <div className="card-body">
                        <h1 className="card-title">{weather.name}</h1>
                        <div className="row ">
                            <div className="col align-self-end">
                                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}></img>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <h2 className="display-4">{weather.main.temp}&deg;C</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;