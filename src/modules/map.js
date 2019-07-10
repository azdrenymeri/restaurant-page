import googleMapsApi from 'load-google-maps-api';

class Map {
  static loadGoogleMapsApi(){
    return googleMapsApi({ key: process.env.GOOGLEMAPS_KEY });
  }
  static createMap(googleMaps,mapElement){
    return new googleMaps.Map(mapElement,{
      center:{lat:40.758, lng:-73.985},
      zoom: 14
    });
  }
}
export {Map}
