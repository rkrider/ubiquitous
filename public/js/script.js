function initMap() {
      // setting the specific location
      var locationBangalore = {lat: 13.1406270, lng: 77.5711820};
      // The map, centered at specified location
      var map = new google.maps.Map(
          document.getElementById('map1'), {zoom: 12, center: locationBangalore});
      // The marker, positioned at specified location
      var marker = new google.maps.Marker({position: location, map: map});
    }