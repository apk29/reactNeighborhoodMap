import React, { Component } from 'react';
import List from './List'
import FilterList from './Filter'

class SideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sideBar">
            <FilterList />
            <List 
            query={this.state.query}
            markers={ this.state.markers }
            venues={ this.state.showVenues }
            />

            </div>
         );
    }
}
 
export default SideBar;

