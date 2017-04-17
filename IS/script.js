function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.451721, lng: 30.599135},
          zoom: 16,
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