function centerLeafletMapOnMarker(map, marker) {
  var latLngs = [ marker.getLatLng() ];
  var markerBounds = L.latLngBounds(latLngs);
  map.fitBounds(markerBounds);
}

var map = L.map('map', { attributionControl: false }).setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var marker = L.marker([46.415750, 6.268020])
  .addTo(map)
  .bindPopup("<b>Titan Fitness</b><br>6 Route des Avouillons, 1196, Gland")
  .openPopup();

centerLeafletMapOnMarker(map, marker);
