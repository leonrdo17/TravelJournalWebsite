// JAVASCRIPT FUNCTION 1: Change hello, world text to hello, name
function welcomeUser()
{
    var userName = prompt("Hello there, what's your name?", "Please enter your name");
    var greetingText = document.getElementById("greeting_text");
        
    // check the content of the answer
    if (userName.length > 0)
    {
        alert("Welcome to TravelJournal, " + userName + "!");
        greetingText.textContent = "Hello, " + userName + "!";
    }
    else
    {
        alert("Enjoy your visit!");
        greetingText.textContent = "Hello, world!";
    }
}

// JAVASCRIPT FUNCTION 2: generate random location for the user
function generateLocation()
{
    var locationArray = new Array;
    locationArray[0] = "places_to_visit/country/italy_country.html";
    locationArray[1] = "places_to_visit/country/russia_country.html";
    locationArray[2] = "places_to_visit/country/indonesia_country.html";
    locationArray[3] = "places_to_visit/country/seychelles_country.html";
    locationArray[4] = "places_to_visit/country/japan_country.html";
    locationArray[5] = "places_to_visit/country/malaysia_country.html";
    locationArray[6] = "places_to_visit/country/turkey_country.html";
    locationArray[7] = "places_to_visit/country/france_country.html";
    locationArray[8] = "places_to_visit/culture/italy_culture.html";
    locationArray[9] = "places_to_visit/culture/russia_culture.html";
    locationArray[10] = "places_to_visit/culture/indonesia_culture.html";
    locationArray[11] = "places_to_visit/culture/seychelles_culture.html";
    locationArray[12] = "places_to_visit/culture/japan_culture.html";
    locationArray[13] = "places_to_visit/culture/malaysia_culture.html";
    locationArray[14] = "places_to_visit/culture/turkey_culture.html";
    locationArray[15] = "places_to_visit/culture/france_culture.html";

    var chosenLink = Math.floor(Math.random() * locationArray.length);
    window.open(locationArray[chosenLink]);
}

// JAVASCRIPT FUNCTION 6 : display small message
function smallMessage()
{
    alert("Feel free to explore each country in our list! :)");
}

