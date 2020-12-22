// Creates function for all of the event clicks and searches made within the website.
$(function () {
    // Utilizes my API key generated from openweathermap.
    var apiKey = "7a99c10103fb399b35622ee892438a3d";




    // Creating search form function event to generate results based on input received.
    $("#search-form").on("submit", function (event) {
        // empty search bar and weather icons of previous weather forecast.
        $(".forecast-card").empty();
        event.preventDefault();
        var search = $("#search-input").val().trim();
        // If search is returned blank, then return.
        if (search === "") {
            return;
        }
        // Define variable for querying URL to search results using API and API key.
        var queryUrl =
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
            search +
            "&units=imperial&appid=" +
            apiKey;
        // Run ajax function to get query URL and then run function for displaying forecast data.
        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function (data) {

            // Day One Display, listing date, weather icon, temperature, humidity.
            var dayOne = moment().format("M/D/YYYY");
            var dayOneIcon = data.list[0].weather[0].icon;
            var dayOneImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayOneIcon + ".png");
            var dayOneTemp = data.list[0].main.temp + " °F";
            var dayOneHumid = data.list[0].main.humidity + "%";
            var dayOneDateEl = $("<p>").text(dayOne);
            var dayOneTempEl = $("<p>").text("Temp: " + dayOneTemp);
            var dayOneHumidEl = $("<p>").text("Humidity: " + dayOneHumid);
            $(".dayOne").append(dayOneDateEl);
            $(".dayOne").append(dayOneImg);
            $(".dayOne").append(dayOneTempEl);
            $(".dayOne").append(dayOneHumidEl);

            // Day Two Display and forward listing date, weather icon, temperature, humidity.
            var dayTwo = moment().add(1, "days").format("M/D/YYYY");
            var dayTwoIcon = data.list[8].weather[0].icon;
            var dayTwoImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayTwoIcon + ".png");
            var dayTwoTemp = data.list[8].main.temp + " °F";
            var dayTwoHumid = data.list[8].main.humidity + "%";
            var dayTwoDateEl = $("<p>").text(dayTwo);
            var dayTwoTempEl = $("<p>").text("Temp: " + dayTwoTemp);
            var dayTwoHumidEl = $("<p>").text("Humidity: " + dayTwoHumid);
            $(".dayTwo").append(dayTwoDateEl);
            $(".dayTwo").append(dayTwoImg);
            $(".dayTwo").append(dayTwoTempEl);
            $(".dayTwo").append(dayTwoHumidEl);

            // Day Three
            var dayThree = moment().add(2, "days").format("M/D/YYYY");
            var dayThreeIcon = data.list[16].weather[0].icon;
            var dayThreeImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayThreeIcon + ".png");
            var dayThreeTemp = data.list[16].main.temp + " °F";
            var dayThreeHumid = data.list[16].main.humidity + "%";
            var dayThreeDateEl = $("<p>").text(dayThree);
            var dayThreeTempEl = $("<p>").text("Temp: " + dayThreeTemp);
            var dayThreeHumidEl = $("<p>").text("Humidity: " + dayThreeHumid);
            $(".dayThree").append(dayThreeDateEl);
            $(".dayThree").append(dayThreeImg);
            $(".dayThree").append(dayThreeTempEl);
            $(".dayThree").append(dayThreeHumidEl);

            // Day Four
            var dayFour = moment().add(3, "days").format("M/D/YYYY");
            var dayFourIcon = data.list[24].weather[0].icon;
            var dayFourImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFourIcon + ".png");
            var dayFourTemp = data.list[24].main.temp + " °F";
            var dayFourHumid = data.list[24].main.humidity + "%";
            var dayFourDateEl = $("<p>").text(dayFour);
            var dayFourTempEl = $("<p>").text("Temp: " + dayFourTemp);
            var dayFourHumidEl = $("<p>").text("Humidity: " + dayFourHumid);
            $(".dayFour").append(dayFourDateEl);
            $(".dayFour").append(dayFourImg);
            $(".dayFour").append(dayFourTempEl);
            $(".dayFour").append(dayFourHumidEl);

            // Day Five
            var dayFive = moment().add(4, "days").format("M/D/YYYY");
            var dayFiveIcon = data.list[32].weather[0].icon;
            var dayFiveImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFiveIcon + ".png");
            var dayFiveTemp = data.list[32].main.temp + " °F";
            var dayFiveHumid = data.list[32].main.humidity + "%";
            var dayFiveDateEl = $("<p>").text(dayFive);
            var dayFiveTempEl = $("<p>").text("Temp: " + dayFiveTemp);
            var dayFiveHumidEl = $("<p>").text("Humidity: " + dayFiveHumid);
            $(".dayFive").append(dayFiveDateEl);
            $(".dayFive").append(dayFiveImg);
            $(".dayFive").append(dayFiveTempEl);
            $(".dayFive").append(dayFiveHumidEl);

        })
        // Creating query URL for search input inquiry in upper box to display city name, weather icon, description, temperature, wind and humidity.
        var queryUrl =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            search +
            "&units=imperial&appid=" +
            apiKey;
        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function (data) {
            $("#city-name").text(data.name + " Weather");
            $("#weather-icon").html("<img src='http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
            $("#description").text(data.weather[0].description);
            $("#temp").text(data.main.temp + "°");
            $("#wind").text(data.wind.speed + " mph");
            $("#humidity").text(data.main.humidity + " %");
        });

    })
    // Document on function for handling the click when the city buttons are clicked, giving forecast information
    $(document).on("click", ".city", function () {
        var search = $(this).attr("data-city");

        var queryUrl =
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
            search +
            "&units=imperial&appid=" +
            apiKey;
        $.ajax({
            url: queryUrl,
            method: "GET",

        }).then(function (data) {
            $(".forecast-card").empty();
            var dayOne = moment().format("M/D/YYYY");
            var dayOneIcon = data.list[0].weather[0].icon;
            var dayOneImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayOneIcon + ".png");
            var dayOneTemp = data.list[0].main.temp + " °F";
            var dayOneHumid = data.list[0].main.humidity + "%";
            var dayOneDateEl = $("<p>").text(dayOne);
            var dayOneTempEl = $("<p>").text("Temp: " + dayOneTemp);
            var dayOneHumidEl = $("<p>").text("Humidity: " + dayOneHumid);
            $(".dayOne").append(dayOneDateEl);
            $(".dayOne").append(dayOneImg);
            $(".dayOne").append(dayOneTempEl);
            $(".dayOne").append(dayOneHumidEl);

            var dayTwo = moment().add(1, "days").format("M/D/YYYY");
            var dayTwoIcon = data.list[8].weather[0].icon;
            var dayTwoImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayTwoIcon + ".png");
            var dayTwoTemp = data.list[8].main.temp + " °F";
            var dayTwoHumid = data.list[8].main.humidity + "%";
            var dayTwoDateEl = $("<p>").text(dayTwo);
            var dayTwoTempEl = $("<p>").text("Temp: " + dayTwoTemp);
            var dayTwoHumidEl = $("<p>").text("Humidity: " + dayTwoHumid);
            $(".dayTwo").append(dayTwoDateEl);
            $(".dayTwo").append(dayTwoImg);
            $(".dayTwo").append(dayTwoTempEl);
            $(".dayTwo").append(dayTwoHumidEl);

            var dayThree = moment().add(2, "days").format("M/D/YYYY");
            var dayThreeIcon = data.list[16].weather[0].icon;
            var dayThreeImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayThreeIcon + ".png");
            var dayThreeTemp = data.list[16].main.temp + " °F";
            var dayThreeHumid = data.list[16].main.humidity + "%";
            var dayThreeDateEl = $("<p>").text(dayThree);
            var dayThreeTempEl = $("<p>").text("Temp: " + dayThreeTemp);
            var dayThreeHumidEl = $("<p>").text("Humidity: " + dayThreeHumid);
            $(".dayThree").append(dayThreeDateEl);
            $(".dayThree").append(dayThreeImg);
            $(".dayThree").append(dayThreeTempEl);
            $(".dayThree").append(dayThreeHumidEl);

            var dayFour = moment().add(3, "days").format("M/D/YYYY");
            var dayFourIcon = data.list[24].weather[0].icon;
            var dayFourImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFourIcon + ".png");
            var dayFourTemp = data.list[24].main.temp + " °F";
            var dayFourHumid = data.list[24].main.humidity + "%";
            var dayFourDateEl = $("<p>").text(dayFour);
            var dayFourTempEl = $("<p>").text("Temp: " + dayFourTemp);
            var dayFourHumidEl = $("<p>").text("Humidity: " + dayFourHumid);
            $(".dayFour").append(dayFourDateEl);
            $(".dayFour").append(dayFourImg);
            $(".dayFour").append(dayFourTempEl);
            $(".dayFour").append(dayFourHumidEl);

            var dayFive = moment().add(4, "days").format("M/D/YYYY");
            var dayFiveIcon = data.list[32].weather[0].icon;
            var dayFiveImg = $("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFiveIcon + ".png");
            var dayFiveTemp = data.list[32].main.temp + " °F";
            var dayFiveHumid = data.list[32].main.humidity + "%";
            var dayFiveDateEl = $("<p>").text(dayFive);
            var dayFiveTempEl = $("<p>").text("Temp: " + dayFiveTemp);
            var dayFiveHumidEl = $("<p>").text("Humidity: " + dayFiveHumid);
            $(".dayFive").append(dayFiveDateEl);
            $(".dayFive").append(dayFiveImg);
            $(".dayFive").append(dayFiveTempEl);
            $(".dayFive").append(dayFiveHumidEl);

        });
    });
    // Document on function for handling the click of the city buttons updating the main card with weather information.
    $(document).on("click", ".city", function () {
        var city = $(this).attr("data-city");
        var queryUrl =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial&appid=" +
            apiKey;
        $.ajax({
            url: queryUrl,
            method: "GET",

        }).then(function (data) {

            $("#city-name").text(data.name + " Weather");
            $("#weather-icon").html("<img src='http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
            $("#description").text(data.weather[0].description);
            $("#temp").text(data.main.temp + "°");
            $("#wind").text(data.wind.speed + " mph");
            $("#humidity").text(data.main.humidity + " %");
        });
    });
})