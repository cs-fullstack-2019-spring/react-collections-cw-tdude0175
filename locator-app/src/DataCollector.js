import React, {Component} from "react"
import DataSort from "./DataSort"

class DataCollector extends Component
{
    render() {
        const LocationData = require("./rawData");
        return (
            <div>
                <DataSort Data={LocationData}/>
            </div>
        );
    }
}


export default DataCollector