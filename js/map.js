function initMap() {
    var ghanaLoc = new google.maps.LatLng(7.8549495909436216, -1.3847759802873594);
    var options = {
        center: ghanaLoc,
        zoom: 7,
        zoomControl: true,
        gestureHandling: "greedy",
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

    }

    var map = new google.maps.Map(document.getElementById("map"), options);
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);


    // locations
    var accraLoc = new google.maps.LatLng(5.603033427043894, -0.18559112601790112);
    var akropongLoc = new google.maps.LatLng(5.972838467401452, -0.08741863396091402);
    var parkLoc = new google.maps.LatLng(9.397312180630133, -1.7473248046233434);
    var mountLoc = new google.maps.LatLng(7.146181130651107, 0.35227486137596364);

    // placing markers & content & functions

    var accraMarker = new google.maps.Marker({
        position: accraLoc,
        map,
        // title: "Accra, The Capital",
        icon: 'https://maps.google.com/mapfiles/kml/pal4/icon47.png',
        animation: google.maps.Animation.BOUNCE
    });

    var accraCont =
        '<p>Accra, the capital</p>';
    var accraInfo = new google.maps.InfoWindow({
        content: accraCont,
    });

    accraMarker.addListener('mouseover', function () {
        accraInfo.open(map, this);
    });
    accraMarker.addListener('mouseout', function () {
        accraInfo.close();
    });

    google.maps.event.addListener(accraMarker, 'click', function () {
        map.setCenter(accraMarker.getPosition());
        map.setZoom(12);
    });

    var akrpngMarker = new google.maps.Marker({
        position: akropongLoc,
        map,
        title: "Presby Church at my Mother's hometown.",
        icon: 'https://maps.google.com/mapfiles/kml/pal2/icon11.png',
        // animation: google.maps.Animation.DROP
    });

    var akrpngCont =
        '<p>Presbytarian Church in Akropong</p>';
    var akrpngInfo = new google.maps.InfoWindow({
        content: akrpngCont,
    });

    akrpngMarker.addListener('mouseover', function () {
        akrpngInfo.open(map, this);
    });
    akrpngMarker.addListener('mouseout', function () {
        akrpngInfo.close();
    });

    var parkMarker = new google.maps.Marker({
        position: parkLoc,
        map,
        // title: "Mole National Park",
        icon: 'https://maps.google.com/mapfiles/kml/pal2/icon4.png',
        // animation: google.maps.Animation.BOUNCE
    });

    var parkCont =
        '<p>Mole National Park has a lot of elephants</p>';
    var parkInfo = new google.maps.InfoWindow({
        content: parkCont,
    });

    parkMarker.addListener('mouseover', function () {
        parkInfo.open(map, this);
    });
    parkMarker.addListener('mouseout', function () {
        parkInfo.close();
    });

    var mountMarker = new google.maps.Marker({
        position: mountLoc,
        map,
        // title: "Mountain Afadjato",
        icon: 'https://maps.google.com/mapfiles/kml/pal3/icon29.png',
        // animation: google.maps.Animation.BOUNCE
    });

    var mountCont =
        '<p>Mountain Afadjato is the highest mountain in Ghana.</p>';
    var mountInfo = new google.maps.InfoWindow({
        content: mountCont,
    });

    mountMarker.addListener('mouseover', function () {
        mountInfo.open(map, this);
    });
    mountMarker.addListener('mouseout', function () {
        mountInfo.close();
    });
}