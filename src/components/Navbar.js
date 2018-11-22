import React, { Component} from "react";
import Settings from "./Settings";

class Navbar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar sticky-top py-0 d-flex justify-content-end">
                    <div className="dropdown">
                        <a className="nav-link text-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Settings</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Settings setNumberOfCities={this.props.setNumberOfCities}/>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;