import React, { Component} from "react";
import { Link } from "react-router-dom";

class Settings extends Component{
    constructor(props) {
        super(props);
    }

    handleChange(number) {
        this.props.setNumberOfCities(number);
    }

    render() {
        const itemsNumber = [1,4,9];
        const { numberOfCities } = this.props;
        return (
            <div className="m-3">
                <h5>Show:</h5>
                <div className="form-group">  
                {itemsNumber.map((item, index) => {
                    return (
                        <div key={`radio${index}`} className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="radio"
                                value={`option${index}`}
                                defaultChecked={item === numberOfCities ? true : false}
                                onChange={() => this.handleChange(item)} 
                            />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                {item}
                            </label>
                        </div>
                    )
                })}
                </div> 
                <Link to="/" className="btn btn-dark btn-transparent">Save</Link>
            </div>
        );
    }
}

export default Settings;