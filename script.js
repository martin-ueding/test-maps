console.log('Test');

var knopf = document.getElementById('knopf');
var eingabe = document.getElementById('textfeld');
var ausgabe = document.getElementById('result');

console.debug(knopf);

var geocoder = new google.maps.Geocoder();

knopf.onclick = function () {
    console.log('onclick');
    console.log(eingabe.value);
    var searchParams = {address: eingabe.value};
    var callback = function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            loc = results[0].geometry.location;
            console.debug(loc);

            // Das hier sind die interessanten Daten, Länge und Breite:
            console.debug(loc.lat());
            console.debug(loc.lng());

            ausgabe.value = loc.toString();
        }
        else {
            alert("Geocode was not successful for the following reason: " + status);
        }

    };
    geocoder.geocode(searchParams, callback);
}
