let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 7.8549495909436216,
            lng: -1.3847759802873594
        },

        zoom: 8,
    });
}