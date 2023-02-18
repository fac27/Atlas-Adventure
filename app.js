// function(){} create the DOM elements we need and append country information to these 

/* function() {}We would now retrieve the name, region, currency and neighbouring countries properties, displaying this in the DOM using a
 div and assign the name property as the id for verifaction
*/

/* function (){} from this main country we've chosen, we would use the name as an argument to make a fetch() to 
Unsplash which we'd display in the DOM */ 

/* function(){} from the 2 countries that are selected we then retrieve the name and flag/img property and create cards
with the image of the flag and use the name of the country as the id for the card that would for verifaction
*/

/* function(){} to verify if users selected country is the main/correct country if verified country is correct display alert 
stating "you choose correct country" and vise versa
*/

/*  function() {} if users selected option is correct increment scoreboard by 1 and regenerate the all the function to allow user to play another round*/

/*  function() {} if users selected option is incorrect make scoreboard go to 0 and display startgame screen*/

// DOM Elements

const imageContainer = document.querySelector("#imageContainer");
const flagImages = document.getElementsByClassName("flagImages");
const flagName = document.getElementsByClassName("flagName");
const facts = document.getElementsByClassName("facts");
const locationImg = document.getElementsByClassName("LocationImg");
const startgGameBtn = document.querySelector("#startGameBtn");
const startGameScreen = document.querySelector("#startGameScreen");
const loadingScreen = document.querySelector("#loadingScreen")
const gameScreen = document.querySelector("#game-Screen")
const countdownEl = document.getElementById('countdown');
let timeLeft = 30;
const audioSuccess = new Audio('assets/short-success-sound-glockenspiel-treasure-video-game-6346.mp3');
const audioFail = new Audio("assets/negative_beeps-6008.mp3")

let chosenCountry;



function timer(){
    const countdown = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(countdown);
    countdownEl.innerHTML = "Time's up!";
    } else {
    countdownEl.innerHTML = `${timeLeft} seconds left`;
    }
    timeLeft -= 1;
    }, 1000);
    }







// Event Listeners
startgGameBtn.addEventListener("click", () => {
    async function removeClasees() {
        return startGameScreen.classList.add("displayNone");
      }
      removeClasees()
      .then((x) => {
        loadingScreen.classList.remove("displayNone")
      })
      .then((x) => {
        setTimeout(() => {
            loadingScreen.classList.add("displayNone");
            gameScreen.classList.remove("displayNone")
            timer()
        }, 3000);
      })
})


for(let i = 0; i < flagImages.length; i++ ){
    flagImages[i].addEventListener("click", function(){
        if(flagImages[i].id == chosenCountry.name.common){
            audioSuccess.play();
            fetchCountryData();
    } else{
        audioFail.play();
    }
})
}

window.addEventListener("resize", function() {
    if (window.innerWidth < 650){
        imageContainer.classList.remove("flex-Row");
        imageContainer.classList.add("flex-column")
    } else{
        imageContainer.classList.remove("flex-column")
        imageContainer.classList.add("flex-Row");
    }
  });

//  All Functions

// function that generates the two flag images
function appendFlags(array){
    for(let x = 0; x < array.length; x++){
      flagImages[x].src = array[x].flags.png;
      flagImages[x].id = array[x].name.common
      flagName[x].innerHTML = array[x].name.common;
    }
}

// function that generates the 2 facts
function appendFacts(array){
    const keys = Object.keys(array.currencies);
    const firstKey = keys[0];
  facts[0].innerHTML = array.continents;
  facts[1].innerHTML =  array.currencies[firstKey].symbol ;
  console.log(firstKey)
}
// function to append the images from the api
function appendLocation(array){
    for(let x = 0; x < array.length; x++){
        locationImg[x].src = array[x];
      }
}

const count = 5;
const apiKey = "5Jw2_Dj9jSVoB3h0kbFkucCmwcjCnWKKMbnMYT0sYyY";
const apiURL = `https://api.unsplash.com/search/photos?&query=France&client_id=${apiKey}&count=${count}`;
// const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// const client = "LtnnQlk8Wc7E0Wecjc6fvwhx1Fjeztj1CIUpuuJdqfQ3pbWhlEiZAYjm"     
// fetch(`https://api.pexels.com/v1/search?query=${chosenCountry.name.common} landmarks?page=1&per_page=10`,{
// headers: {
// Authorization: client,
// }
// })

function backupFetch(){
    const backupKey = "PZNu91ajpfe_CUsdTI0wI70EEM0B4EPL2ZKpbZqNBtw"
    fetch(`https://api.unsplash.com/search/photos?&query=${chosenCountry.name.common} Landmarks&client_id=${backupKey}&count=${count}`)
    .then((res) => res.json())
    .then((data) => rand3(data))
    .catch((error) => backupFetch2()) 
}

function backupFetch2(){
    const backupKey = "50FzKJR1ap80aUKbYcW2zX-gSVEavBCNHn5uGhA6P6E"
    fetch(`https://api.unsplash.com/search/photos?&query=${chosenCountry.name.common} Landmarks&client_id=${backupKey}&count=${count}`)
    .then((res) => res.json())
    .then((data) => rand3(data))
    .catch((error) => console.log(error)) 
}

// function that fetches the pexel images
function fetchUnsplash(country){
fetch(`https://api.unsplash.com/search/photos?&query=${chosenCountry.name.common} Landmarks&client_id=${apiKey}&count=${count}`)
.then((res) => res.json())
.then((data) => rand3(data))
.catch((error) => backupFetch())
}


// function(){} randomiser function which selects 2 of the countries from the array, and puts these into the  
function rand1(array){
    const countriesArray = [];
 for(let i = 0; i < 4; i++){
    // const randomNumb = Math.floor(Math.random() * (array.length - 0 + 1) + 0);
    const randomNumb = Math.floor(Math.random()*array.length)
    countriesArray.push(array[randomNumb]);
 }
 appendFlags(countriesArray);
 return(countriesArray);
}


// function(){} second randomiser would then choose one main country from the 2 selected 
function rand2(array){
    const randomNumb = Math.floor(Math.random()*array.length)
    chosenCountry = array[randomNumb];
    appendFacts(chosenCountry);
    console.log(chosenCountry)
    return chosenCountry;
}

// function third randomiser would then choose 2 images from the fetch images api and append to the dom
function rand3(array){
    const countriesImages = [];
    for(let i = 0; i < 2; i++){
        const randomNumb = Math.floor(Math.random()*array.results.length)
        countriesImages.push(array.results[randomNumb].urls.regular);
     }
     appendLocation(countriesImages);
    console.log(array)
     return countriesImages
    // console.log(array.results[0])
}


// fetch() to countries API - which generate the initaial countries and starts the game
function fetchCountryData(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(array => rand1(array))
    .then(array2 => rand2(array2))
    .then((country) => fetchUnsplash(country))
    .catch((error) => console.log(error))
}

fetchCountryData()








