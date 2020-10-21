function initMap() {
      // setting the specific location
      var locationBangalore = {lat: 12.9805, lng: 77.5815};
      var locationChennai = {lat: 13.080040010201738, lng: 80.26880345906798};
      // The map, centered at specified location
      var map = new google.maps.Map(
          document.getElementById('map1'), {zoom: 12, center: locationBangalore});
        var map = new google.maps.Map(
            document.getElementById('map2'), {zoom: 12, center: locationChennai});
      // The marker, positioned at specified location
      var marker = new google.maps.Marker({position: location, map: map});
    }