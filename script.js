function initMap() {
    var options = {
        zoom: 8,
        center: { lat: 36.1627, lng: -86.7816 }
    }

    // new map

    var map = new
        google.maps.Map(document.getElementById("map"), options);

        // listen for click on map
        google.maps.event.addListener(map, "click",
        function(event) {
            // add marker
            addMarker({coords:event.latLng});
        });

    // add marker
    /*
    var marker = new google.maps.Marker({
        position:{lat:36.1757, lng:-86.7556},
        map:map,
        icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });

    var infoWindow = new google.maps.InfoWindow({
        content: "<h3>Basement East</h3>"
    });

    marker.addListener("click", function(){
        infoWindow.open(map, marker);
    });

    */


    // Array of markers
    var markers = [
        {
            coords: { lat: 36.1757, lng: -86.7556 },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: "<h3>Basement East</h3>"
        },
        { 
            coords: { lat: 33.7410, lng: -84.3459 },
            content: "<h3>The Earl</h3>"
         },
         { 
            coords: { lat: 40.7206, lng: -73.9939 },
            content: "<h3>Bowery Ballroom</h3>"
        }
        
    ];

    // loop through markers
    for(var i = 0; i < markers.length; i++) {
        // add marker
        addMarker(markers[i]);
    }

   /* addMarker({
        coords: { lat: 36.1757, lng: -86.7556 },
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content: "<h3>Basement East</h3>"
    });
    addMarker({ 
        coords: { lat: 33.7410, lng: -84.3459 },
        content: "<h3>The Earl</h3>"
     });
    addMarker({ 
        coords: { lat: 40.7206, lng: -73.9939 },
        content: "<h3>Bowery Ballroom</h3>"
    }); */

    // add marker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage,
        });

        // check for customicon
        if (props.iconImage) {
            // set icon image
            marker.setIcon(props.iconImage);
        }

        // check content 
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener("click", function () {
                infoWindow.open(map, marker);
            });
        }
    }
}