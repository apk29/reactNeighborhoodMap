import React, { Component } from 'react';
// import data from './data'
import "./Map.css";
import axios from 'axios';

class Map extends Component {
state = {
  places: []
}
  componentDidMount() {
    // this.renderMap();
    this.getData();
  }

  renderMap = () => {
    this.loadScript("https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAPSXmNZXCu_tHV-TYQNtwWH4t6jODM_PU&callback=initMap");
    window.initMap = this.initMap
  }
  getData = () => {
    const client_id = "VV3ZGLVA5IELWBM2U3RPAXXZTA40AJJKLFIPHAOUESD1F2IB";
    const client_secret = "SQNM5FZAOEVCCVG1W2TUDUGVW51G2DOP1TYFC535RWBA10PT";
    const fourSquareUrl = "https://api.foursquare.com/v2/venues/explore?"

    const parameters = {
      client_id: client_id,
      client_secret: client_secret,
      query: "food",
      near: "Oakland",
      v: "20181030"
    }
    axios.get(fourSquareUrl + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        places: response.data.response.groups[0].items
      }, this.renderMap())

    })
    .catch(error => {
      console.log("Error " + error)
    })
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
    //Create map
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 37.813331, lng: -122.261801},
      zoom: 12
    })
       
      //Create an infoWindow, this outside of function below to keep only 
      //one infoWindow Open
      let infowindow = new window.google.maps.InfoWindow();
     
      //this displays a dynamic marker
    this.state.places.map(place => {

      let contentString = `${place.venue.name}`
   
      //Creat a marker
    let marker = new window.google.maps.Marker({
      position: {lat: place.venue.location.lat, lng: place.venue.location.lng},
      map: map,
      title: place.venue.name
          
    });
    //Open infoWindow by click
    marker.addListener('click', function() {
      
      //Change content
      infowindow.setContent(contentString);
      //Open infoWindow
      infowindow.open(map, marker);

    });
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
