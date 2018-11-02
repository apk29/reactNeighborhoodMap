import React, { Component } from 'react'
import '../App.css'
import List from './List'

class FilterList extends Component {
   
render = () => {
    return (
        <div className="filterList">
            <input type={"search"} placeholder="Filter"
            type="search"
            id="search"
            value={this.props.query}
            onChange={event => this.props.updateQuery(event.target.value)}
            />
        </div>
    )
}
}
export default FilterList;