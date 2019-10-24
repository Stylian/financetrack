import React, {Component} from 'react';
import LeagueToolbar from "./LeagueToolbar";
import {Redirect} from "react-router";
import DataCard from "../../DataCard";

const apikey = "LK7K77EXHJTC65S7";
class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            btcToEUR: null,
        };
    }

    // https://www.alphavantage.co/documentation/

    componentDidMount() {

        fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=EUR&apikey=" + apikey)
            .then(res => res.json())
            .then(
                (result) => {

                    let data = result["Time Series (Digital Currency Monthly)"];
                    let dates = [];
                    let closePrices = [];

                    for(let dat in data) {
                        dates[dates.length] = dat.slice(5,7) + "/" + dat.slice(2,4);
                        closePrices[closePrices.length] = Math.round( data[dat]["4a. close (EUR)"] );
                    }

                    this.setState(state => {
                        return {
                            ...state,
                            isLoaded: true,
                            btcToEUR: {
                                "dates" : dates.reverse(),
                                "closePrices" : closePrices.reverse()
                            }
                        }
                    });
                },
                (error) => {
                    this.setState(state => {
                        return {
                            ...state,
                            error
                        }
                    });
                }
            )
    }

    render() {
        return this.state.isLoaded? (
            <div>
                <DataCard
                    title={"Bitcoin to Euro"}
                    labels={this.state.btcToEUR.dates}
                    data={this.state.btcToEUR.closePrices}
                    color={"#9fdf9f"}
                />
            </div>
        ) : (null);
    };
}

export default LandingPage;
