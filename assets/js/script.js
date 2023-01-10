var cities = [];

$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();

    if (userInput == null || userInput == "") {
        console.log("This was empty");
    } else {
    
        $("#cityBtnGroup").append("<button class='button is-success is-fullwidth recentCity'>" + userInput + "</button>");

    }

});