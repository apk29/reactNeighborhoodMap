import React, { Component } from 'react'
import '../App.css'

class FilterList extends Component {
    styles = {
        width: "100%",  //sets witdth of filter box
        fontSize: "1.2em",
        marginTop: "2%",
        display: "flex"
    };
render = () => {
    
    return (
        <form className="filterList">
            <input 
                style = { this.styles }  //sets fontsize of filter box
                placeholder="Type restaurant name here"
                type="text"
                value={this.props.query}
                onChange={event => this.props.updateQuery(event.target.value)}
                />
            <button className="btn btn-second btn-sm" 
                style= {{ marginTop: "5%" }}
                onClick= { () => this.props.clearFilter() }  >Reset Filter
            </button>
        </form>
           )
        }
    }
export default FilterList;