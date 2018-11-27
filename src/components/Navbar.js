import React, { Component} from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar sticky-top py-0 d-flex justify-content-end">
                    <Link to="/settings" className="nav-link text-light">Settings</Link>
                </nav>
            </div>
        );
    }
}

export default Navbar;