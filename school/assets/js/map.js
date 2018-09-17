var map;
function initMap() {
    // The location of Uluru
    var uluru = {lat: 50.455821, lng: 30.49006}; // 50.455821, 30.49006
    // The map, centered at Uluru
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: uluru,
        styles:
            [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#007aff"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "lightness": "0"
                        },
                        {
                            "gamma": "1.00"
                        }
                    ]
                }
            ],
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}