import React, { Component} from "react";
import Card from  './Card'
class MainPage extends Component {

    renderCards() {

    }

    render() {
        const { weather, isLoading, isError, numberOfCities, changeCity } = this.props;
        const cards = weather.slice(0,numberOfCities).map((city, index) => {
            return <Card key={index} index={index} weather={city} changeCity={changeCity} />
        })
        return (
            <div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {
                            !isLoading && !isError ? cards : <div></div>
                        }
                        {
                            isError ? <h1>Error!</h1> : <div></div>
                        }
                        {
                            isLoading ? <h1>Loading</h1> : <div></div>
                        }
                    </div>
                </div>
            </div>

        );
    }

}

export default MainPage;