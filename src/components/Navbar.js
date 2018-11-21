import React, { Component} from "react";

class Navbar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <nav class="navbar sticky-top p-0 d-flex justify-content-end">
                <a class="nav-link text-light" href="#">Settings</a>
            </nav>
            </div>
        );
    }
}

export default Navbar;