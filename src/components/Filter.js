import React, { Component } from 'react'
import '../App.css'

class FilterList extends Component {
   
render = () => {
    return (
        <div className="filterList">
            <input 
            type="search" 
            placeholder="Filter"
            value={this.props.query}
            onChange={event => this.props.updateQuery(event.target.value)}
            autoFocus={true}
            />
        </div>
    )
}
}
export default FilterList;