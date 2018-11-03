import React, { Component } from 'react';

class List extends Component {

    openMarker = locationName => {
        // eslint-disable-next-line
        this.props.markers.map(marker => {
          if (marker.title === locationName) {
            window.google.maps.event.trigger(marker, "click")
          }
        })
      }

    render() { 
        return ( 
            <div className="list">
            {/* {this.props.places.map((place) => 
                <li key={place.venue.id}>{place.venue.name}
                </li>)} */}
              {this.props.places.map((place) => 
                <li key={place.venue.id}>{place.venue.name}
                </li>)}
        
        
        </div>
        )
    }
}
 
export default List;