
// AJAX Call to Geocoding API
function getGeo() {
    var userCity = $("#userInput").val();
    var countryCode = "USA"
    var APIKey = "13153e6b745e46bb88f837dd42f2883c";
    var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + userCity + "," + countryCode + "&limit=1" + "&appid=" + APIKey;

        
        $.ajax({
            url: geoURL,
            method: "GET"
        }).then(function(response) {
    
            get5DayForecast(response);
    
        });

           // Conditional statement for user input
           if (userCity == null || userCity == "") {
            // change console to modal popup that alerts user to enter a city name
            alert("Please enter a city name to begin search");
            
        };
}


function get5DayForecast(response) {
    console.log(response[0].name);
    console.log(response[0].lat);
    console.log(response[0].lon);

    var lat = response[0].lat;
    var lon = response[0].lon;
    var APIKey = "13153e6b745e46bb88f837dd42f2883c";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial";
   

    


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);

        console.log(response);

        // Grabs icon code and insets into url
        var iconCode = response.list[0].weather[0].icon;
        var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

        // Empties title in selectedCity container
        $("#selectedCity").empty();

        $("#cityWeather").empty();

        // Appends searched city to selectedCity title
        $("#selectedCity").append(response.city.name + " " + dayjs().format("MM/DD/YYYY"));

        // removes is-hidden class and attaches iconURL to the source value
        $("#weatherIcon").removeClass("is-hidden");
        $("#weatherIcon").attr('src', iconURL);

        // Appends main weather temp and description to subtitle
        $("#cityWeather").append(response.list[0].main.temp + ", " + response.list[0].weather[0].description);

        // Appends searched city to cityBtnGroup
        $("#cityBtnGroup").append("<button class='button is-success is-fullwidth recentCity'>" + response.city.name + "</button>");

        // Removes is-hidden class to show 5 day forecast title and boxes
        $("#5DayTitle").removeClass("is-hidden")
        $("div").removeClass("is-hidden");

        // Appends weather to corresponding days
        // Day 1
        var day1Icon = response.list[1].weather[0].icon;
        var day1IconURL = "http://openweathermap.org/img/wn/" + day1Icon + "@2x.png";
    
        $("#day1").empty();
        $("#day1").append(response.list[1].main.temp);
        $("#day1WeatherIcon").removeClass("is-hidden");
        $("#day1WeatherIcon").attr('src', day1IconURL);
        
        // Day 2
        var day2Icon = response.list[9].weather[0].icon;
        var day2IconURL = "http://openweathermap.org/img/wn/" + day2Icon + "@2x.png";

        $("#day2").empty();
        $("#day2").append(response.list[9].main.temp);
        $("#day2WeatherIcon").removeClass("is-hidden");
        $("#day2WeatherIcon").attr('src', day2IconURL);

        // Day 3
        var day3Icon = response.list[17].weather[0].icon;
        var day3IconURL = "http://openweathermap.org/img/wn/" + day3Icon + "@2x.png";

        $("#day3").empty();
        $("#day3").append(response.list[17].main.temp);
        $("#day3WeatherIcon").removeClass("is-hidden");
        $("#day3WeatherIcon").attr('src', day3IconURL);

        // Day 4
        var day4Icon = response.list[25].weather[0].icon;
        var day4IconURL = "http://openweathermap.org/img/wn/" + day4Icon + "@2x.png";

        $("#day4").empty();
        $("#day4").append(response.list[25].main.temp);
        $("#day4WeatherIcon").removeClass("is-hidden");
        $("#day4WeatherIcon").attr('src', day4IconURL);

        // Day 5
        var day5Icon = response.list[33].weather[0].icon;
        var day5IconURL = "http://openweathermap.org/img/wn/" + day5Icon + "@2x.png";

        $("#day5").empty();
        $("#day5").append(response.list[33].main.temp);
        $("#day5WeatherIcon").removeClass("is-hidden");
        $("#day5WeatherIcon").attr('src', day5IconURL);

    });

    
}

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    
    getGeo();

});




