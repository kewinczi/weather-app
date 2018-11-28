import React, { Component} from "react";
import EditCard from "./EditCard"

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            isEdited: false,
            isValid: false, 
            newCityName: "" 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.validateNewCityName = this.validateNewCityName.bind(this);
    }

    handleChange(e) {
        const newCityName = e.target.value;
        this.setState({newCityName})
    }

    handleEdit() {
        this.setState({ isEdited: !this.state.isEdited});
    }

    handleSave() {
        if (this.validateNewCityName()) {
            this.handleEdit();
            this.props.changeCity(this.state.newCityName, this.props.index);
            this.setState({ newCityName: "", isValid: false });
        }
    }

    validateNewCityName() {
        return this.state.newCityName !== "";;
    }

    render() {
        const { weather } = this.props;
        const { isEdited } = this.state;
        const editIcon = !isEdited ? "Edit" : "X";
        const saveIcon = isEdited ? "Save": ""
        const cityName = isEdited ? <EditCard cityName={weather.name} handleChange={this.handleChange}/> : <h1 className="card-title display-4">{weather.name}</h1>
        return (
            <div className="col-lg-4 col-md-6 d-flex justify-content-center my-3">
                <div className="card text-center h-100 d-inline-block rounded-0 border-0">
                    <a className="d-flex justify-content-end pr-1 d-inline-block float-right" onClick={this.handleEdit}>{editIcon}</a>
                    <a className="d-inline-block float-right pr-1" onClick={this.handleSave}>{saveIcon}</a>
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