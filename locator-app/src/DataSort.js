import React, {Component} from "react"
import DataRender from "./DataRender"
class DataSort extends Component
{
    render() {
        const MapData = this.props.Data.map((item)=>{
           return <DataRender key={item.id} information={item}/>
        });
        return (
            <div>
                {MapData}
            </div>
        );
    }
}


export default DataSort