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

	toBerlin();
}

toBerlin = function() {
	var address = "Bundestag, Berlin";

	var geocoder = new google.maps.Geocoder();
	var searchParams = {address: address};
	var callback = function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
		}
		else {
			alert("Geocode was not successful for the following reason: " + status);
		}

	};
	geocoder.geocode(searchParams, callback);
};

google.maps.event.addDomListener(window, 'load', initialize);
