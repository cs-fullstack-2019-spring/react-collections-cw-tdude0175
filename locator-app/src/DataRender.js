import React, {Component} from "react"
import ExtraDataRender from "./ExtraDataRender"

class DataRender extends Component
{
    LogKey = (e) =>{
        console.log(this.props.information.address);
         console.log(e.style)
    };

    render() {

        return (
                <div>
                <p onClick={this.LogKey}>Id: {this.props.information.id}</p>
                <p onClick={this.LogKey}>Name:{this.props.information.name}</p>
                <p onClick={this.LogKey}>UserName: {this.props.information.username}</p>
                <p onClick={this.LogKey}>Email: {this.props.information.email}</p>
                    <ExtraDataRender Info={this.props.information.address} />
                    <hr/>
                </div>
        );
    }
}


export default DataRender