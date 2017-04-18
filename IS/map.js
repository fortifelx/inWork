function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.446000, lng: 30.599999},
          zoom: 15,
          styles: [
           {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 0.5
            }
        ],
    },
        {
            featureType: 'poi.business',
        stylers: [
            {
                visibility: 'off'
            }
        ]
        }
]
        });
    var image = 'img/marker.png';
    var beachMarker = new google.maps.Marker({
    position: {lat: 50.451846, lng: 30.598572},
    map: map,
    icon: image
  });
      };

    
