import React, {Component} from "react"

class GeoDataRender extends Component
{
    render() {
        return (
            <p>geo: lat: {this.props.Info.lat} lng:{this.props.Info.lng}</p>
        );
    }
}


export default GeoDataRender