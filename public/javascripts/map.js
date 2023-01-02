function centerLeafletMapOnMarker(map, marker) {
  var latLngs = [ marker.getLatLng() ];
  var markerBounds = L.latLngBounds(latLngs);
  map.fitBounds(markerBounds);
}

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoiZGV2ZXJ0ZXUiLCJhIjoiY2pwZmkycmEyMDNnODNxcHUyMms0cXBjbyJ9.RZYyAgc8gLrvDuQ_OFGIlQ'
// }).addTo(mymap);

// var marker = L.marker([46.415750, 6.268020]).addTo(mymap);
// marker.bindPopup("<b>Titan Fitness</b><br>6 Route des Avouillons, 1196, Gland").openPopup();
// centerLeafletMapOnMarker(mymap, marker);

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var marker = L.marker([46.415750, 6.268020]).addTo(map)
    .bindPopup("<b>Titan Fitness</b><br>6 Route des Avouillons, 1196, Gland")
    .openPopup();

centerLeafletMapOnMarker(map, marker);
