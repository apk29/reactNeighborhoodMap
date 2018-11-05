import React, { Component } from 'react'
import '../App.css'

class FilterList extends Component {
   
render = () => {
    return (
        <form className="filterList">
            <input type="button" 
            style={{ width: "100%",  //sets witdth of filter box
            fontSize: "1.2em" }}  //sets fontsize of filter box
            type="search" 
            placeholder="Filter"
            value={this.props.query}
            onChange={event => this.props.updateQuery(event.target.value)}
            autoFocus={true}
            />
            <button className="btn btn-second btn-sm"
                onClick= { () => this.props.clearFilter() }  >Reset Filter
             </button>
        </form>
    )
}
}
export default FilterList;