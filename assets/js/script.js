var currentWeather = document.getElementById('currentWeather');
var fiveDayWeather = document.getElementById('fiveDayWeather');
var userCitySearch = document.getElementById('userCitySearch');

var APIKey = "13153e6b745e46bb88f837dd42f2883c";

var query = "api.openweathermap.org/data/2.5/forecast?q=" + userCitySearch + "&appid=" + APIKey;


// Event listener on the 
$('#searchBtn').on('click', function() {
    console.log('Search Button Event Listener');
});
