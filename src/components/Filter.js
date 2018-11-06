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
            <input type="button" 
                style = { this.styles }  //sets fontsize of filter box
                placeholder="Search for Restaurants"
                value={this.props.query}
                onChange={event => this.props.updateQuery(event.target.value)}
                autoFocus={true} />
            <button className="btn btn-second btn-sm" 
                style= {{ marginTop: "5%" }}
                onClick= { () => this.props.clearFilter() }  >Reset Filter
            </button>
        </form>
           )
        }
    }
export default FilterList;