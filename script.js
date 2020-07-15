function initMap() {
    var options = {
        zoom: 8,
        center: {lat:36.1627,lng:-86.7816}
    }

    // new map

    var map = new 
    google.maps.Map(document.getElementById("map"), options);

    // add marker

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



}