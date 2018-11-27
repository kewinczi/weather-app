import React, { Component} from "react";
import { listOfCities } from '../constants';

class EditCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newCityName: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const newCityName = e.target.value;
        this.setState({newCityName})
    }
    render() {
        const { newCityName } = this.state;
        return (
            <div>
                <input 
                    className="display-4 container-fluid editCityInput" 
                    placeholder={`${this.props.cityName}...`}
                    value={newCityName}
                    onChange={this.handleChange}
                />
          </div>
        );
    }
}

export default EditCard;