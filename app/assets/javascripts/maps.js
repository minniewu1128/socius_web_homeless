/*
  Contains the needed functions to make the marker map work.
 */

/*
  Called by the google maps API when it's main script finishes loading.
  The GMaps api expects a function named `initMaps` thus the name.
  This will use the API to initialize the map view.
 */
function initMap() {
  alert('map init called');
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

