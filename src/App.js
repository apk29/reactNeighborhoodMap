import React, {	Component } from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp';
import axios from 'axios';
import List from './components/List'
import FilterList from './components/Filter';
import Error from './components/Error'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			places: [],
			markers: [],
			showVenues: [],
			query: '',
			hiddenMarkers: []
		}
	}
	componentDidMount() {
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
			v: "20181030",
			limit: 28
		}
		axios.get(fourSquareUrl + new URLSearchParams(parameters))
			.then(response => {
				this.setState({
          	places: response.data.response.groups[0].items,
          	// makes list re-appear when filter is erased
          	showVenues: response.data.response.groups[0].items
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
		script.error = () => {
			alert("Error occured, check URL")
		}
	}
	initMap = () => {
		//Create map
		let map = new window.google.maps.Map(document.getElementById("map"), {
			center: {
				lat: 37.813331,
				lng: -122.261801},
				zoom: 13
			})
			
		
		//Create an infoWindow, this outside of function below to keep only 
		//one infoWindow Open
		let infowindow = new window.google.maps.InfoWindow();
		//this displays a dynamic marker & information in marker
		this.state.places.forEach((place) => {
			const contentString = `${place.venue.name},<br>
                                 ${place.venue.location.address},<br>
							     ${place.venue.location.city}`
			//Creat a marker
			const marker = new window.google.maps.Marker({
				position: {
					lat: place.venue.location.lat,
					lng: place.venue.location.lng
				},
				map: map,
				animation: window.google.maps.Animation.DROP,
				title: place.venue.name
			});
			this.state.markers.push(marker)

			function animationEffect() {
				marker.setAnimation(window.google.maps.Animation.BOUNCE)
				setTimeout(function () {
					marker.setAnimation(null)
				}, 1400)
			}

			function openMarker() {
				// Setting the content of the InfoWindow
				infowindow.setContent(contentString)
				animationEffect()
				//Open infoWindow
				infowindow.open(map, marker)
			}
			//Open infoWindow by click
			marker.addListener('click', function () {
				openMarker();
			});
		})
	}
	updateQuery = query => {
		this.setState({
			query
		})
		this.state.markers.map(marker => marker.setVisible(true))
		let filterVenues
		let hiddenMarkers
		if (query) {
			const match = new RegExp(escapeRegExp(query), "i")
			filterVenues = this.state.places.filter(place =>
				match.test(place.venue.name))
			this.setState({
				places: filterVenues
			})
			hiddenMarkers = this.state.markers.filter(marker =>
				filterVenues.every(place => place.venue.name !== marker.title))
			hiddenMarkers.forEach(marker => marker.setVisible(false))
			this.setState({
				hiddenMarkers
			})
		} else {
			this.setState({
				places: this.state.showVenues
			})
			this.state.markers.forEach(marker => marker.setVisible(true))
		}
	}
// clear filter function 
clearFilter = () => {
      
    this.setState({
      query: '',
    
    })
  }
  render() { 
	if(this.state.hasError) {
		return <div aria-label="Error message">Error!</div>
	} else {
    
	const { clickLocation } = this;
	const { places, markers, showVenues, query } 
	        = this.state
	
	return (
		<main>
		   <Error>
			  <div className="App-header" aria-label="Header">
			  	Oakland Restaurants
			  </div>
			  <div className="App" >
				 <div id="map" aria-label="Map" 
				 ></div>
				 <div className="sideBar">
					<div className="FilterList">
					   <FilterList aria-label="Search Bar"
					   //passes the items to the FilterList Component
					   venues={ showVenues } 
					   markers={ markers } 
					   query={ query }     	
					   updateQuery= {b => this.updateQuery(b)}
					   clickLocation = { clickLocation }
					   clearFilter = { this.clearFilter }
					   />
					</div>
					<div className="List" aria-label="Menu Container">
					   <List //passes the items to the List Component
						  places= { places }
						  markers = { markers } />
					</div>
				 </div>
			  </div>
		   </Error>
		</main>
		);
		}
		};
		}

 export default App;
