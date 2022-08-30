$(document).ready() 

var APIGenius = "13b920321cmshfcc89781b090ab3p1ad43bjsnebb5eaf338d3"; //Genius/Rapid API Key


//Global Variables 
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var searchFormEl = document.querySelector("#search-form"); // Variable for search form element
//var artistNameSearch = document.querySelector("#artist-name-search"); //Variable for Artist Name search input field
// var artistNameSearch = document.getElementById("artistNamesearch").value.trim().toUpperCase();
var genreTypeSearch = document.querySelector("#genresearched"); // Variable for the type of Genre searched.
//var postalCodeSearched = document.querySelector("#postal-searched"); // Variable for Location searched.
var genreContainerEl = document.querySelector(".showsbygenre"); // Variable for container to hold returned shows by genre
var showsTonightContainerEl = document.querySelector(".upcomingshows"); // Variable for container to hold returned shows for tonight. 
var relatedGenreContainerEl = document.querySelector(".related-genre"); // Variable for Div to hold returned simlilar genre tags from LastFM API
//var genreSearched = genreTypeSearch.value.trim().toUpperCase();// Variable for user input from genre search
var savedPostalCode = []; // Array to store history of searched Zip Codes
var savedGenres = []; // Array to store history of searched Artists



// On Click Functions
//Modal Functions
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// Get results

function search () {
    let input = document.getElementById('searchForm').value 
    input = input.toLowerCase ();
    let x = document.getElementsByClassName('genresearched');
}

// get value from search elements
var searchForm = search.value;






// Create Click Event Handler for search form
var formSubmitHandler = function (event) {
    
    if (!genreTypeSearch.value) {
        return;
    }

    event.preventDefault();
   
    var search = genreTypeSearch.value.trim();

    //Variables for Postal Code value and Genre Value from user input
     //postalCode = postalCodeSearched.value.trim();
     


    console.log(search);
    getGenre(search);

    genreTypeSearch.value = "";


      //check for valid zipCode
       //const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postalCode);
      
    //if (isValidZip === true) {
       // console.log(isValidZip);
          //Save searched zip codes into local storage
       //  savedPostalCode.push(postalCode);
       //  localStorage.setItem("postalcodeSearch", JSON.stringify(savedPostalCode));

        
       //getEventInfo(postalCode);
      // postalCode.value = "";

   //} else if (isValidZip === false || null) {
//        alert("Please enter zip code");
//    }

    //console.log("postalCode");

    // var genreSearched = document.getElementById("genresearched").value.trim().toUpperCase();

    // var genreSearched = genreTypeSearch.value.trim().toUpperCase();
    // var genreSearched = document.getElementById("genresearched").value.trim().toUpperCase();

       // if (genreSearched || postalCode) {
    // if (genreSearched.value === "") {
    //     alert("Please enter a valid genre");
    //     //Save searched genres into local storage
    //     savedGenres.push(genresearched);
    //     localStorage.setItem("genreSearched", JSON.stringify(savedGenres));


    //     //call TicketMaster API function and LastFm API function
    //     getEventInfo();
    //     // Call LastFM genre info searched as well? 
    //     getSimilarGenres();

    // } else {
    // }


   
};
    








// ****** Fetch call to TicketMaster Rapid API to get Event data for dates, venues *****//

var getEventInfo = function (eventInfo) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("apiKey", "<REQUIRED>");
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '167cf18937msh0de257d271840fbp18e791jsndfda729eda53',
            'X-RapidAPI-Host': 'Ticketmasterstefan-skliarovV1.p.rapidapi.com'
        },
        body: encodedParams
    };
    
    fetch('https://ticketmasterstefan-skliarovv1.p.rapidapi.com/createEvents', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

};

// // Empty You Might Like Container for new data
// relatedGenreContainerEl.textContent = "";


// // // Display related info by genre
// // var relatedGenre = document.createElement('div');
// // relatedGenre.id = "relatedGenre";
// // relatedGenre.innerHTML = "Similar results by Genre";
// // relatedGenreContainerEl.append(eventsGenre);

// };


//***** API CALL TO GENIUS API ******//

//var getEventInfo = function (eventInfo) {
    function getGenre(search) {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '167cf18937msh0de257d271840fbp18e791jsndfda729eda53',
                'X-RapidAPI-Host': 'genius.p.rapidapi.com'
            }
        };
        
        fetch('https://genius.p.rapidapi.com/search?q=' + genreTypeSearch, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        





// Empty Shows Tonight Container for new data
showsTonightContainerEl.textContent = "";
//genreContainerEl.textContent = "";

    }



//Display events by zip code to shows tonight 
var displayUpcomingShows = function(eventInfo){
console.log("returned shows by zip code");

//check for returned events info from TicketMaster API
if (eventInfo.length === 0) {
    showsTonightContainerEl.textContent = "No Shows to Display.";
    return;
}

// // Display Event/artist Name
// var eventName = document.createElement('div');
// eventName.id = "eventname";
// eventName.innerHTML = "Upcoming Shows ";
// showsTonightContainerEl.append(eventName);

// // Display shows searched by genre
// var eventsGenre = document.createElement('div');
// eventsGenre.id = "eventsGenre";
// eventsGenre.innerHTML = "Shows by Genre";
// genreContainerEl.append(eventsGenre);



};












    // **** Local Storage -load zipcodes and artists searched to localStorage **** //

var loadSearchedZipCode = function (postalCode) {
    searchArray = JSON.parse(localStorage.getItem("postalcodeSearch"));

    if (searchArray) {
        console.log(searchArray);
        savedPostalCode = JSON.parse(localStorage.getItem("postalcodeSearch"));
        for (let i = 0; i < searchArray.length; i++) {
            
        }
    }
};





//Add event listener for button click on search
searchFormEl.addEventListener("submit", formSubmitHandler);
