

function showMap(id) {
    const mapDiv = document.getElementById(id);
    mapDiv.style.display = 'block';
}

function initMap(id) {
    map = new google.maps.Map(document.getElementById(id), {
        mapId: "3926b1a28ec3e200",
        center: { lat:50.541169, lng: 5.504856},
        zoom: 15,
    });
    marker = new google.maps.Marker({
        position: {lat: 50.541169, lng: 5.504856},
        map: map,
        title: 'Emplacement de ma maison à Neupré'
    });
    marker.setMap(map);
}

document.addEventListener('DOMContentLoaded', () => {
    showMap('map');
    showMap('map2');
    initMap('map');
    initMap('map2');
});
