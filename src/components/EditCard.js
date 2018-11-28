import React, { Component} from "react";
import { listOfCities } from '../constants';

class EditCard extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { newCityName, handleChange } = this.props;
        return (
            <div>
                <input 
                    className="display-4 container-fluid editCityInput" 
                    placeholder={`${this.props.cityName}...`}
                    value={newCityName}
                    onChange={handleChange}
                />
          </div>
        );
    }
}

export default EditCard;