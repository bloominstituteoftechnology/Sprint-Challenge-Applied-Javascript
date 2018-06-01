// Grab the latitude & longitude
$.getJSON("https://freegeoip.net/json/", function(ipAPI) {
  var latitude = ipAPI.latitude;
  var longitude = ipAPI.longitude;
  var city = ipAPI.city.replace(/(\s)/gi, "+"); // Replace spaces
  var region = ipAPI.region_code;

  $.getJSON(
    "https://cors-everywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&APPID=" + owKey,
    function(ow) {
      var location = city + ", " + region,
        status = ow.weather[0].main,
        windMeters = ow.wind.speed,
        windMiles = ow.wind.speed * Math.round(2.23694),
        tempF = Math.round(
          ((ow.main.temp - 273.15) * 1.8 + 32) * 10 / 10
        ).toFixed(0),
        tempC = Math.round(ow.main.temp - 273.15),
        iconSource = ow.weather[0].icon,
        icons = {
          // ow.weather[0].icon to wi
          // Daytime conditions
          "01d": "wi-day-sunny",
          "02d": "wi-day-sunny-overcast",
          "03d": "wi-day-cloudy",
          "04d": "wi-cloudy",
          "09d": "wi-day-sprinkle",
          "10d": "wi-day-rain",
          "11d": "wi-day-thunderstorm",
          "13d": "wi-day-snow",
          "50d": "wi-day-fog",

          // Nightime conditions
          "01n": "wi-stars",
          "02n": "wi-night-partly-cloudy",
          "03n": "wi-night-cloudy",
          "04n": "wi-cloudy",
          "09n": "wi-night-sprinkle",
          "10n": "wi-night-rain",
          "11n": "wi-night-thunderstorm",
          "13n": "wi-night-snow",
          "50n": "wi-night-fog"
        },
        iconName = iconSource.split(" ").map(function(code) {
          var results = [];
          results.push(icons[code]);
          return results.join("");
        }),
        icon = iconName[0],
        extremeSource = ow.weather[0].id.toString(),
        extremes = {
          // ow.weather[0].id to wi
          // Extreme weather conditions
          "900": "wi-tornado",
          "901": "wi-hurricane",
          "902": "wi-hurricane",
          "903": "wi-snowflake-cold",
          "904": "wi-hot",
          "905": "wi-windy",
          "906": "wi-hail",

          // Beaufort wind scale
          "951": "wi-beafort-1",
          "952": "wi-beafort-2",
          "953": "wi-beafort-3",
          "954": "wi-beafort-4",
          "955": "wi-beafort-5",
          "956": "wi-beafort-6",
          "957": "wi-beafort-7",
          "958": "wi-beafort-8",
          "959": "wi-beafort-9",
          "960": "wi-beafort-10",
          "961": "wi-beafort-11",
          "962": "wi-beafort-12"
        },
        extremeName = extremeSource.split(" ").map(function(code) {
          var results = [];
          results.push(extremes[code]);
          return results.join("");
        }),
        extreme = extremeName[0];

      var windIcon = "wi-wind towards-" + ow.wind.deg + "-deg";
      var currentGeoCode= ("Current conditions in " + city + " - " + region +": " + status + ", <br>wind at " + windMiles + " MPH  <br> Temp" +": "   + tempF +"<small>-F (</small>" + tempC +"<small>-c)</small>");
      document.getElementById("geoCode").innerHTML = currentGeoCode;
    }
  );
});

