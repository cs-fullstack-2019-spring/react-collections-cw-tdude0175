import React, {Component} from "react"
import GeoDataRender from "./GeoDataRender"

class ExtraDataRender extends Component
{
    render() {
        return (
            <div>
            <p>Street: {this.props.Info.street}</p>
            <p>Suite:{this.props.Info.suite}</p>
            <p>City:{this.props.Info.city}</p>
            <p>Zip:{this.props.Info.zipcode}</p>
                <GeoDataRender Info={this.props.Info.geo} />
            </div>
        );
    }
}


export default ExtraDataRender