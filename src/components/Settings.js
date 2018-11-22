import React, { Component} from "react";

class Settings extends Component{
    constructor(props) {
        super(props);
    }

    handleChange(number) {
        this.props.setNumberOfCities(number);
    }

    render() {
        const itemsNumber = [1,4,9];
        return (
            <div className="container">
                {itemsNumber.map((item, index) => {
                    return (
                        <div key={`radio${index}`} className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="radio"
                                value={`option${index}`} 
                                onChange={() => this.handleChange(item)} 
                            />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                {item}
                            </label>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Settings;