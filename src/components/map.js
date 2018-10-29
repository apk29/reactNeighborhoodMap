import React, { Component } from 'react';
// import data from './data'
import "./Map.css";

class Map extends Component {

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    this.loadScript("https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAPSXmNZXCu_tHV-TYQNtwWH4t6jODM_PU&callback=initMap");
    window.initMap = this.initMap
  }

  loadScript = (url) => {
    let index = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }
  
  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 37.813331, lng: -122.261801},
      zoom: 8
    })
  }

  render() { 
    return (
      <main>
      <div id="map"></div>
      </main>
      )
  };

}

 export default Map;
