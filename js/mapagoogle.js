//mapa google
function initMap() {
    var location = {lat: 51.075420, lng: 16.992270};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: location
            });
            
            var marker = new google.maps.Marker ({
                position: location,
                map: map
            });
          }