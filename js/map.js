function initMap() {
    var ghanaLoc = new google.maps.LatLng(7.8549495909436216, -1.3847759802873594);
    var options = {
        center: ghanaLoc,
        zoom: 7,
        zoomControl: true,
        gestureHandling: "greedy"
    }
    var map = new google.maps.Map(document.getElementById("map"), options);

    // locations
    var accraLoc = new google.maps.LatLng(5.603033427043894, -0.18559112601790112);
    var akropongLoc = new google.maps.LatLng(5.972838467401452, -0.08741863396091402);
    var parkLoc = new google.maps.LatLng(9.397312180630133, -1.7473248046233434);
    var mountLoc = new google.maps.LatLng(7.146181130651107, 0.35227486137596364);
    
    // placing markers
    var accraMarker = new google.maps.Marker({
        position: accraLoc,
        map,
        title: "Accra, The Capital",
    });

    var akrpngMarker = new google.maps.Marker({
        position: akropongLoc,
        map,
        title: "Presby Church at my Mother's hometown.",
    });

    var parkMarker = new google.maps.Marker({
        position: parkLoc,
        map,
        title: "Mole National Park",
    });

    var mountMarker = new google.maps.Marker({
        position: mountLoc,
        map,
        title: "Mountain Afadjato",
    });

    // on-click functions
}