import React, { Component } from 'react';
import './List';

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
            <ul>
              {this.props.places.map(place => 
                <li style={{ listStyleType: "none",
                    textAlign: 'center' }}
                    key={place.venue.id}
                    onClick={() => {
                    this.openMarker(place.venue.name);
                  }}
                  
                >{ place.venue.name }
                </li>)}
                </ul>
             </div>
        )
    }
}
 
export default List;