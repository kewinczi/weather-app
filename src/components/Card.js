import React, { Component} from "react";
import EditCard from "./EditCard";
import { handleErrors } from "../helpers";
import EditMenu from "./EditMenu";

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isEdited: false,
            newCityName: "",
            showSpinner: false,
            isNotFound: false,
            isEmpty: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.isNewCityNameValid = this.isNewCityNameValid.bind(this);
        this.fetchWeatherForNewCity = this.fetchWeatherForNewCity.bind(this);
    }

    handleChange(e) {
        this.setState({ isNotFound: false})
        const newCityName = e.target.value;
        this.setState({newCityName})
        this.setState({ isEmpty: newCityName === "" });
    }

    toggleEditMode() {
        this.setState({ isEdited: !this.state.isEdited});
    }

    handleEdit() {
        this.toggleEditMode();
        this.setState({ isNotFound: false })
    }

    handleSave() {
        if (this.isNewCityNameValid()) {
            this.fetchWeatherForNewCity(this.state.newCityName);
        }
    }

    fetchWeatherForNewCity(city) {
        this.setState({ 
            showSpinner: true,
            isNotFound: false
        });
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d99157026a1814b598c98bc8bc02fa34`)
            .then(handleErrors)
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                this.props.changeCity(response, this.props.index);
                this.setState({ showSpinner: false })
                this.setState({ newCityName: "" });
                this.toggleEditMode();
            }, 500)
            }).catch(()=>{
                this.setState({ showSpinner: false });
                this.setState({ isNotFound: true });
            })
    }

    isNewCityNameValid() {
        return this.state.newCityName !== "" && !this.state.isNotFound;
    }

    render() {
        const { weather } = this.props;
        const { isEdited, isEmpty, isNotFound, showSpinner } = this.state;
        const cityName = isEdited ? <EditCard cityName={weather.name} handleChange={this.handleChange}/> 
            : <h1 className="card-title display-4">{weather.name}</h1>
        return (
            <div className="col-lg-4 col-md-6 d-flex justify-content-center my-3">
                <div className="card text-center h-100 d-inline-block rounded-0 border-0">
                    <EditMenu 
                        isEdited={isEdited} 
                        isEmpty={isEmpty} 
                        isNotFound={isNotFound} 
                        showSpinner={showSpinner} 
                        handleSave={this.handleSave} 
                        handleEdit={this.handleEdit}
                    />
                    <div className="card-body">
                        {cityName}
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