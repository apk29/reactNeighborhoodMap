import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import SideBar from './components/SideBar';
import { timingSafeEqual } from 'crypto';


class App extends Component {
    
  render() {
    return (
      <main>
        <div className="App-header">Oakland Restaurants</div>
          <div className="App" >
            <SideBar />
            <Map />
          </div> 
      </main>       
    );
  }
}

export default App;
