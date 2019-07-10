import {Map}  from './map';
const ourLocation = document.createElement('div');

ourLocation.innerHTML = `
<div class="row" id="OurLocation">
  <div class="col navMenu">
    <h2 class="text-center">~ Our Location ~</h2>
  </div>
</div>
<div class="row">
  <div id="map-location" class="col-md-9 map"></div>
  <div class="col-md-3">
    <h3>Address:</h3>
    <p>Viale Enrico Fermi, 20159 Milan, Mailand (Lombardia) </p>
    <h3>Email:</h3>
    <p>mail@example.com</p>
  </div>
</div>`;

document.addEventListener("DOMContentLoaded", function() {
  let mapElement = document.getElementById('map-location');

  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
});


export {ourLocation}
