var cities = [];


$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var APIKey = "13153e6b745e46bb88f837dd42f2883c";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey + "&units=imperial";
    
    // AJAX Call to OpenWeatherAPI
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
        $("#selectedCity").append(response.name);


        
        $("#cityWeather").append(response.main.temp);
    });

    // Conditional statement for user input
    if (userInput == null || userInput == "") {
        // change console to modal popup that alerts user to enter a city name
        console.log("This was empty");
    } else {
    
        // Appends searched city to cityBtnGroup
        $("#cityBtnGroup").append("<button class='button is-success is-fullwidth recentCity'>" + userInput + "</button>");

    };

    

});