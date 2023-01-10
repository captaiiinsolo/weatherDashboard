var cities = [];


$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var APIKey = "13153e6b745e46bb88f837dd42f2883c";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + APIKey;
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);

        console.log(response);

        $("#selectedCity").empty();

        $("#selectedCity").append(response.city.name);
    });

    if (userInput == null || userInput == "") {
        // change console to modal popup that alerts user to enter a city name
        console.log("This was empty");
    } else {
    
        $("#cityBtnGroup").append("<button class='button is-success is-fullwidth recentCity'>" + userInput + "</button>");

    };

    

});