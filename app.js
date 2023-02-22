// DOM elements & global variables

const imageContainer = document.querySelector("#imageContainer");
const flagImages = document.getElementsByClassName("flagImages");
const flagName = document.getElementsByClassName("flagName");
const facts = document.getElementsByClassName("facts");
const locationImg = document.getElementsByClassName("LocationImg");
const startGameBtn = document.querySelector("#startGameBtn");
const startGameScreen = document.querySelector("#startGameScreen");
const loadingElement = document.querySelector("#loadingScreen div:nth-child(1)");
const loadingScreen = document.querySelector("#loadingScreen")
const gameScreen = document.querySelector("#game-Screen")
const countdownEl = document.getElementById('countdown');
let timeLeft = 60;
const audioSuccess = new Audio('assets/short-success-sound-glockenspiel-treasure-video-game-6346.mp3');
const audioFail = new Audio("assets/negative_beeps-6008.mp3")
const playAgain = document.querySelector("#playAgain");
const EndGame = document.querySelector("#gameStat");
let totalScore = document.querySelector("#TotalScore");
let bestScore = document.querySelector("#highScore");
let headerHighScore = document.querySelector("#bestScore");
let highScore = 0;
let score = 0;  
let chosenCountry;
const countdownDuration = 4;
const count = 5;
let countdown;
const apiKey = "5Jw2_Dj9jSVoB3h0kbFkucCmwcjCnWKKMbnMYT0sYyY";
const apiURL = `https://api.unsplash.com/search/photos?&query=France&client_id=${apiKey}&count=${count}`;

// High Score local storage

if(localStorage.getItem("highScore") === null){
    highScore = 0;
}else{
   highScore = localStorage.getItem("highScore");
   headerHighScore.innerHTML = localStorage.getItem("highScore");
}

function timer(){
    countdown = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(countdown);
    countdownEl.innerHTML = "Time's up!";
    gameEnd();
    } else {
    countdownEl.innerHTML = timeLeft;
    }
    timeLeft -= 1;
    }, 1000);
    }

// Event Listeners
startGameBtn.addEventListener("click", () => {
  async function removeClasses() {
    startGameScreen.classList.add("displayNone");
  }
  removeClasses().then(() => {
    loadingScreen.classList.remove("displayNone");
  }).then(() => {
    loadingElement.textContent = "Ready...";
    setTimeout(() => {
      loadingElement.textContent = "Go!";
      loadingElement.style.fontSize = "48px";
      setTimeout(() => {
        loadingScreen.classList.add("displayNone");
        gameScreen.classList.remove("displayNone");
        timer()
      }, 1000);
    }, 2000);
  });
});

playAgain.addEventListener("click", function(){
    restartGame();
    
})

function gameEnd(){
    clearInterval(countdown);
    gameScreen.classList.add("displayNone");
    countdownEl.classList.add("displayNone")
    EndGame.classList.remove("displayNone");
    totalScore.innerHTML = score;
    bestScore.innerHTML = highScore;
    
}

function restartGame(){
    fetchCountryData();
    timeLeft = 60;
    EndGame.classList.add("displayNone");
    gameScreen.classList.remove("displayNone");
    countdownEl.classList.remove("displayNone")
    countdownEl.innerHTML = timeLeft;
    score = 0;
    document.querySelector("#scoreDisplay").textContent = score
    timer()
}


for(let i = 0; i < flagImages.length; i++ ){
    flagImages[i].addEventListener("click", function(){
        if(flagImages[i].id == chosenCountry.name.common){
            audioSuccess.play();
            fetchCountryData();
            score++;
            if(score > highScore) {
                highScore = score; 
                localStorage.setItem("highScore", highScore);
            }
            document.querySelector("#scoreDisplay").textContent = score
    } else{
        audioFail.play();
        gameEnd();
    }
})
}

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
  facts[1].innerHTML = array.currencies[firstKey].symbol;
  console.log(firstKey)
}

// function to append the images from the api
function appendLocation(array){
    for(let x = 0; x < array.length; x++){
        locationImg[x].src = array[x].urls.regular;
      }
}

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

// function that fetches the unsplash images
function fetchUnsplash(country){
fetch(`https://api.unsplash.com/search/photos?&query=${chosenCountry.name.common} Landmarks&client_id=${apiKey}&count=${count}`)
.then((res) => res.json())
.then((data) => rand3(data))
.catch((error) => backupFetch())
}

// randomiser function which selects countries from the array  
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

// second randomiser which then chooses one main country from the 2 selected 
function rand2(array){
    const randomNumb = Math.floor(Math.random()*array.length)
    chosenCountry = array[randomNumb];
    appendFacts(chosenCountry);
    console.log(chosenCountry)
    return chosenCountry;
}

// third randomiser function which then chooses 2 images from the fetch images api and appends to the dom
function rand3(array){
    const countriesImages = [];
    for(let i = 0; i < 2; i++){
        const randomNumb = Math.floor(Math.random()*array.results.length)
        if(countriesImages.length == 0){
            countriesImages.push(array.results[randomNumb]);
        } else if(array.results[randomNumb].id == countriesImages[0].id){
            const randomNumb2 = Math.floor(Math.random()*array.results.length)
            countriesImages.push(array.results[randomNumb2])
        } else{
            countriesImages.push(array.results[randomNumb])
        }
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








