import React, { Component } from 'react';
import './List';
import fourSquare from '../img/fourSquare.png'

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
                <div className="fourSquareImg">
              <img style={{width: 125, height: 100 }}
                src={fourSquare}
                alt="Powered by Foursquare"
                title='Powered by Foursquare'
              />
            </div>
             </div>
        )
    }
}
 
export default List;