$(document).ready() 
// var APIGenius = "13b920321cmshfcc89781b090ab3p1ad43bjsnebb5eaf338d3"; //Genius API Key


   //  autocomplete(document.getElementById("user-input"), history)
  //   var resultsSection = $("results");

   // showMainPage();

// On Click Functions


// Get results


// function search () {
//     let input = document.getElementById('searchForm').value 
//     input = input.toLowerCase ();
//     let x = document.getElementsByClassName('artistNamesearch')
// }


// // get value from search elements
// var searchForm = search.value;

//if (artist) {
   // getUserRepos(artistNameSearch);
//}

//if (genresearch) {
  //  getElementById(genresearch);
//}

//if (locationsearch) {
 //   getUserRepos(locationsearch);
//}

//API Key Variables

var RapidAPIKey = "167cf18937msh0de257d271840fbp18e791jsndfda729eda53"; //Rapid API Key 



//Global Variables 
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var searchFormEl = document.querySelector("#search-form"); // Variable for search form element
//var artistNameSearch = document.querySelector("#artist-name-search"); //Variable for Artist Name search input field
var genreTypeSearch = document.querySelector("#genresearched"); // Variable for the type of Genre searched.
//var postalCodeSearched = document.querySelector("#postal-searched"); // Variable for Location searched.
var genreContainerEl = document.querySelector(".showsbygenre"); // Variable for container to hold returned shows by genre
var showsTonightContainerEl = document.querySelector(".upcomingshows"); // Variable for container to hold returned shows for tonight. 
var relatedGenreContainerEl = document.querySelector(".related-genre"); // Variable for Div to hold returned simlilar genre tags from LastFM API
//var genreSearched = genreTypeSearch.value.trim().toUpperCase();// Variable for user input from genre search
var savedPostalCode = []; // Array to store history of searched Zip Codes
var savedGenres = []; // Array to store history of searched Artists



// Create Click Event Handler for search form
var formSubmitHandler = function (event) {
    
    if (!genreTypeSearch.value) {
        return;
    }

    event.preventDefault();
   
    var search = genreTypeSearch.value.trim();

    //Variables for Postal Code value and Genre Value from user input
     //postalCode = postalCodeSearched.value.trim();
     //genreSearched = genreTypeSearch.value.trim().toUpperCase();


    console.log(search);
    getEventInfo(search);

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

    //Check for valid Genre search 

    // var genreSearched = document.getElementById("genresearched").value.trim().toUpperCase();

    // var genreSearched = genreTypeSearch.value.trim().toUpperCase();
    // var genreSearched = document.getElementById("genresearched").value.trim().toUpperCase();

    //check for valid genre search

    
// MODAL JS
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];



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
 

// When the user clicks on the button, open the modal

btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


    // //if (genreSearched || postalCode) {
    //     if (genresearched.value === "") {
    //         alert("Please enter a valid genre");
    //         //Save searched genres into local storage
    //         savedGenres.push(genresearched);
    //         localStorage.setItem("genreSearched", JSON.stringify(savedGenres));
    
    
    //         //call TicketMaster API function and LastFm API function
    //         getEventInfo();
    //         // Call LastFM genre info searched as well? 
    //         //getSimilarGenres();
    
    //     } else {
    //     }
    
    // };

//check for valid artist
// var artistNameSearch = document.getElementById("artistNamesearch").value.trim().toUpperCase();


//Fetch call to TicketMaster to get Event data for dates, venues
// //Fetch to LastFM to get similar genres 
// var getSimilarGenres = function (getSimilar) {
// fetch("http://ws.audioscrobbler.com/2.0/?method=tag.getsimilar&tag=" + genreSearched + "&tag.getinfo&tag=" + genreSearched + "&api_key=" + APILastFm + "&format=json")
// .then (getSimilar  => {
//     console.log(getSimilar);
//     return getSimilar.json();
// })
// .then (getSimilar => {
//     console.log(getSimilar)
// });

// // Empty You Might Like Container for new data
// relatedGenreContainerEl.textContent = "";


// // // Display related info by genre
// // var relatedGenre = document.createElement('div');
// // relatedGenre.id = "relatedGenre";
// // relatedGenre.innerHTML = "Similar results by Genre";
// // relatedGenreContainerEl.append(eventsGenre);

// };


//var getEventInfo = function (eventInfo) {
    function getEventInfo(search) {


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '167cf18937msh0de257d271840fbp18e791jsndfda729eda53',
                'X-RapidAPI-Host': 'genius.p.rapidapi.com'
            }
        };
        
        
    var apiURL = ("https://genius.p.rapidapi.com/artists/16775/songs", options);
    fetch(apiURL, options)
    console.log(apiURL)
	.then(response => response.json(response))
    .then(response => console.log(response))
    .catch(err => console.error(err))
.then (response => {
    console.log(data)





// Empty Shows Tonight Container for new data
showsTonightContainerEl.textContent = "";
//genreContainerEl.textContent = "";


});
};

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












    //load zipcodes and artists searched to localStorage 

var loadSearchedZipCode = function (postalCode) {
    searchArray = JSON.parse(localStorage.getItem("postalcodeSearch"));

    if (searchArray) {
        console.log(searchArray);
        savedPostalCode = JSON.parse(localStorage.getItem("postalcodeSearch"));
        for (let i = 0; i < searchArray.length; i++) {
            
        }
       

    }
}


// MODAL JS
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};





//Add event listener for button click on search
searchFormEl.addEventListener("submit", formSubmitHandler)

