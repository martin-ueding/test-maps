var map;
function initialize() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(-30, 150),
		map: map,
		title: "Test",
		icon: "http://martin-ueding.de/_static/arrow.png"
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
