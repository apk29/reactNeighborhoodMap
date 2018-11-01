import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import FilterList from './components/Filter'
import SideBar from './components/SideBar';
// import data from './components/data'

class App extends Component {
    
  render() {
    return (
      <div className="App" >
      <div>
        <h1 className="App-header">Oakland Restaurants</h1>
      </div>
      
        <Map /><SideBar />
      </div>
    );
  }
}

export default App;
