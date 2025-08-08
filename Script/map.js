 function initMap() {
        var location = {lat: 14.5978, lng: 121.0351}; // Coordinates for Thurston Software Solutions
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Thurston Software Solutions, Inc.'
        });}