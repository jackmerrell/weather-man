$(function(){

  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  var url = "";

  function showPosition(position) {
    getLocation();
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    url = "https://api.darksky.net/forecast/cd42d74eedbcef6a8614c6142db0c3ed/" + lat +','+ long;
    console.log(url);

    $.get(url, function(data) {
    var currentTemperature = data.currently.temperature;
    console.log(data);
    document.getElementById('darkSkyTemperature').innerHTML ='Temperature: ' + currentTemperature;


});
}

showPosition();

});
