import React, { Component} from "react";
import Card from  './Card'
class MainPage extends Component {

    render() {
        const { weather, isLoading, isError, numberOfCities } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {
                            isLoading && !isError ? <h1>Loading...</h1> : 
                            weather.slice(0,numberOfCities).map((city, index) => {
                                return <Card key={index} weather={city} />
                            })
                        }
                        {
                            isError ? <h1>Error!</h1> : <div></div>
                        }
                    </div>
                </div>
            </div>

        );
    }

}

export default MainPage;