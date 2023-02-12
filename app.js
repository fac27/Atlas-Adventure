// first fetch() to countries API - will generate up to 200 countries within an array when it is fetched ✅

// function(){} randomiser function which selects 2 of the countries from the array ✅

// function(){} second randomiser would then choose one main country from the 2 selected ✅

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

const imageContainer = document.querySelector("#imageContainer");

window.addEventListener("resize", function() {
    if (window.innerWidth < 650){
        imageContainer.classList.remove("flex-Row");
        imageContainer.classList.add("flex-column")
    } else{
        imageContainer.classList.remove("flex-column")
        imageContainer.classList.add("flex-Row");
    }
  });

//   const array = [1,2,3,4,5,6,7,8,9]

function rand1(array){
    const countriesArray = [];
 for(let i = 0; i< 2; i++){
    const randomNumb = Math.floor(Math.random() * (array.length - 0 + 1) + 0);
    countriesArray.push(array[randomNumb]);
 }
 return(countriesArray);
}

function rand2(array){
    const randomNumb = Math.floor(Math.random() * (array.length - 0 + 1) + 0);
    console.log(array[randomNumb])
}




function fetchCountryData(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(array => rand1(array))
    .then(array2 => rand2(array2))
    .catch((error) => console.log(error))
}




fetchCountryData()

