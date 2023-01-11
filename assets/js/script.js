$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var userCity = $("#userInput").val();
    var countryCode = "USA"
    var APIKey = "13153e6b745e46bb88f837dd42f2883c";
    var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + userCity + "," + countryCode + "&limit=1" + "&appid=" + APIKey;
    

    // AJAX Call to Geocoding API
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
    } else {
    
        // Appends searched city to cityBtnGroup
        $("#cityBtnGroup").append("<button class='button is-success is-fullwidth recentCity'>" + userCity + "</button>");

    };

    

});

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

        // Empties title in selectedCity container
        $("#selectedCity").empty();

        $("#cityWeather").empty();

        // Appends searched city to selectedCity title
        $("#selectedCity").append(response.city.name);


        // Appends main weather temp and description to subtitle
        $("#cityWeather").append(response.list[0].main.temp + ", " + response.list[0].weather[0].description);

        // Removes is-hidden class to show 5 day forecast title and boxes
        $("#5DayTitle").removeClass("is-hidden")
        $("div").removeClass("is-hidden");

        // Appends weather to corresponding days
        // Day 1
        $("#day1").empty();
        $("#day1").append(response.list[1].main.temp);
        
        // Day 2
        $("#day2").empty();
        $("#day2").append(response.list[9].main.temp);

        // Day 3
        $("#day3").empty();
        $("#day3").append(response.list[17].main.temp);

        // Day 4
        $("#day4").empty();
        $("#day4").append(response.list[25].main.temp);

        // Day 5
        $("#day5").empty();
        $("#day5").append(response.list[33].main.temp);
        


    });




    
}