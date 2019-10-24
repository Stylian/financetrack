import React, {Component} from 'react';
import {Card, CardContent, CardHeader, Paper, TableCell} from "@material-ui/core";
import {Line} from "react-chartjs-2";

class DataCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        };

    }


    render() {
        return (
            <Paper style={{margin: 20}} elevation={20}>
                <Card style={{minWidth:600, maxWidth:600}} >
                    <CardHeader title={this.props.title} align={"center"}
                                titleTypographyProps={{variant: 'h7'}} />
                    <CardContent>
                        <Line
                            data={{
                                labels: this.props.labels,
                                datasets: [{
                                    data: this.props.data,
                                    backgroundColor: this.props.color,
                                }],
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                legend: {
                                    display: false,
                                },
                                elements: {
                                    point: {
                                        radius: 2
                                    }
                                }
                            }}
                        />
                    </CardContent>

                </Card>
            </Paper>
        );
    }
}

export default DataCard;
