
/* List view showing location names */
export const data = [{
    name: 'Cholita Linda',
    location: {
        lat: 37.83617413695148,
        lng: -122.26278223600943
    }, 
    
}, {
    name: 'Stay Gold Delicatessen',
    location: {
        lat: 37.817698599378375,
        lng: -122.27585630660695
    }, 
   
}, {
    name: 'Arizmendi Bakery',
    location: {
        lat: 37.81066647714583,
        lng: -122.24481041159486
    }, 
   
}, {
    name: 'Tacos Mi Rancho',
    location: {
        lat: 37.79888908973301,
        lng: -122.25670100723919
    }, 
   
}, {
    name: "Beauty's Bagel Shop",
    location: {
        lat: 37.82783115240899,
        lng: -122.26472891128223
    }, 
   
    name: "Zachary's Chicago Pizza",
    location: {
        lat: 37.8462752693253,
        lng: -122.25204128552018
    }, 
   
},{
    name: "Abura-Ya",
    location: {
        lat: 37.80595917918534,
        lng: -122.26769328117369
    }, 
   
   }, 
];

/*styles Array   */
    
    var styles = [{
        elementType: 'geometry',
        stylers: [{
            color: '#ebe3cd'
        }]
    }, {
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#523735'
        }]
    }, {
        elementType: 'labels.text.stroke',
        stylers: [{
            color: '#f5f1e6'
        }]
    }, {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#c9b2a6'
        }]
    }, {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#dcd2be'
        }]
    }, {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#ae9e90'
        }]
    }, {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{
            color: '#dfd2ae'
        }]
    }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
            color: '#dfd2ae'
        }]
    }, {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#93817c'
        }]
    }, {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{
            color: '#a5b076'
        }]
    }, {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#447530'
        }]
    }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
            color: '#f5f1e6'
        }]
    }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
            color: '#fdfcf8'
        }]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
            color: '#f8c967'
        }]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#e9bc62'
        }]
    }, {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{
            color: '#e98d58'
        }]
    }, {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#db8555'
        }]
    }, {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#806b63'
        }]
    }, {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{
            color: '#dfd2ae'
        }]
    }, {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#8f7d77'
        }]
    }, {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{
            color: '#ebe3cd'
        }]
    }, {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{
            color: '#dfd2ae'
        }]
    }, {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{
            color: '#b9d3c2'
        }]
    }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#92998d'
        }]
    }];