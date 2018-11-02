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
            query={query}
            markers={ markers }
            places={ showVenues }
            />

            </div>
         );
    }
}
 
export default SideBar;

