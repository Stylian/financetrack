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
            stock: null
        };
    }

    // pound not working
    //https://www.alphavantage.co/query?function=FX_MONTHLY&from_currency=GBP&to_currency=EUR&apikey=LK7K77EXHJTC65S7

    // https://www.alphavantage.co/documentation/

    componentDidMount() {

        // fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=EUR&apikey=" + apikey)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //
        //             let data = result["Time Series (Digital Currency Monthly)"];
        //             let dates = [];
        //             let closePrices = [];
        //
        //             for(let dat in data) {
        //                 dates[dates.length] = dat.slice(5,7) + "/" + dat.slice(2,4);
        //                 closePrices[closePrices.length] = Math.round( data[dat]["4a. close (EUR)"] );
        //             }
        //
        //             this.setState(state => {
        //                 return {
        //                     ...state,
        //                     isLoaded: true,
        //                     btcToEUR: {
        //                         "dates" : dates.reverse(),
        //                         "closePrices" : closePrices.reverse()
        //                     }
        //                 }
        //             });
        //         },
        //         (error) => {
        //             this.setState(state => {
        //                 return {
        //                     ...state,
        //                     error
        //                 }
        //             });
        //         }
        //     )

        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=ORCL&apikey=" + apikey)
            .then(res => res.json())
            .then(
                (result) => {

                    let data = result["Monthly Adjusted Time Series"];
                    let dates = [];
                    let closePrices = [];

                    for(let dat in data) {
                        dates[dates.length] = dat.slice(5,7) + "/" + dat.slice(2,4);
                        closePrices[closePrices.length] = Math.round( data[dat]["5. adjusted close"] );
                    }

                    this.setState(state => {
                        return {
                            ...state,
                            isLoaded: true,
                            stock: {
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
                {/*<DataCard*/}
                {/*    title={"Bitcoin to Euro"}*/}
                {/*    labels={this.state.btcToEUR.dates}*/}
                {/*    data={this.state.btcToEUR.closePrices}*/}
                {/*    color={"#9fdf9f"}*/}
                {/*/>*/}
                <DataCard
                    title={"Oracle"}
                    labels={this.state.stock.dates}
                    data={this.state.stock.closePrices}
                    color={"#aa935"}
                />
            </div>
        ) : (null);
    };
}

export default LandingPage;
