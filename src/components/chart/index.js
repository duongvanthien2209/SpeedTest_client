import React, { Component } from 'react';
import HighCharts from 'highcharts';

class Chart extends Component {
    componentDidMount() {
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(HighCharts);
            });
        }
        // Set container which the chart should render to.
        this.chart = new HighCharts[this.props.type || "Chart"](
            this.props.container, 
            this.props.options
        );
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {
        return (
            <div id={this.props.container} />
        );
    }
}

export default Chart;

