import {Map}  from './map';
const ourLocation = document.createElement('div');
ourLocation.setAttribute('id','ourLocation')
ourLocation.innerHTML = `
<div class="row">
  <div class="col navMenu">
    <h2 class="text-center">~ Our Location ~</h2>
  </div>
</div>
<div class="row">
  <div id="map-container" class="col-md-9">
  <div id="map-location" class="map"></div>
  </div>
  <div class="col-md-2">
    <h3>Address:</h3>
    <p>Viale Enrico Fermi, 20159 Milan, Mailand (Lombardia) </p>
    <h3>Email:</h3>
    <p>mail@example.com</p>
  </div>
</div>`;

const initMap = () => {
  let mapElement = document.getElementById('map-location');

  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
  
}


export {ourLocation,initMap}
