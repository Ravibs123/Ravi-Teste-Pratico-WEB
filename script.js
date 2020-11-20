
// GEOLOCALIZACAO \\
let userLat;
let userLon;
let checkCoords = false;
function getCoords(){

  let latCoords = document.getElementById("lat");
  let lonCoords = document.getElementById("lon");

  if (navigator.geolocation) {
    console.log("geolocation availlable");
    navigator.geolocation.getCurrentPosition(function(position){
      userLat = position.coords.latitude;
      userLon = position.coords.longitude;
      
      latCoords.innerHTML = userLat.toFixed(8);
      lonCoords.innerHTML = userLon.toFixed(8);
      checkCoords = true;
    });
  } else {
  alert("O seu navegador nao suporta o API de GeoLocarion!");
  
  }
  
}


// Clima Local \\

let userCity = document.getElementById("city");
let userWeather = document.getElementById("weather");
let userTemp = document.getElementById("temp");
let weatherIcon;

function getCurrentWeather(){

  fetch("https://api.openweathermap.org/data/2.5/weather?lat="+userLat+"&lon="+userLon+"&lang=pt&appid=c8b84b5fc749966a3a09411666155a33")
  .then(response => response.json())
  .then(data => {
    userCity.innerHTML = data['name'] + " - " + data['sys']['country'];
    userWeather.innerHTML = data['weather'][0]['description'];
    userTemp.innerHTML = Math.round(data['main']['temp'] - 273.15) +"°C";
    weatherIcon = data['weather'][0]['icon'];
    let imgIconWeather = document.getElementById("imgIconWeather").src = "img/icons_weather/" + weatherIcon + ".png";
    
    if (checkCoords === true){
      let displayWeather = document.getElementById("divWeather").style.display = "flex";
      let displayErrorWeather = document.getElementById("divErrorWeather").style.display = "none";
    }
    if(checkCoords === false){
      let displayWeather = document.getElementById("divWeather").style.display = "none";
      let displayErrorWeather = document.getElementById("divErrorWeather").style.display = "flex";
    }
  })

}


// Lanchonete \\

let inputBread = document.getElementById("bread");
let inputMeat = document.getElementById("meat");
let inputCheese = document.getElementById("cheese");
let inputBacon = document.getElementById("bacon");
let inputLettuce = document.getElementById("lettuce");
let inputOnion = document.getElementById("onion");
let inputTomato = document.getElementById("tomato");
let inputPickles = document.getElementById("pickles");


//  Bread \\
function checkBread(){

  // Bread Top\\
  
  let divBreadTop = document.getElementById("BreadTop");
  let createImgBreadTop = document.createElement("img");
  let imgBreadTop = document.getElementById("imgBreadTop")

  // Bread Bottom \\
  let divBreadBottom = document.getElementById("BreadBottom");
  let createImgBreadBottom = document.createElement("img");
  let imgBreadBottom = document.getElementById("imgBreadBottom")

  if (inputBread.checked){

    divBreadTop.appendChild(createImgBreadTop)
    createImgBreadTop.id = "imgBreadTop";
    createImgBreadTop.src="img/lanchonete/bread_top.png";

    divBreadBottom.appendChild(createImgBreadBottom)
    createImgBreadBottom.id = "imgBreadBottom";
    createImgBreadBottom.src="img/lanchonete/bread_bottom.png";

  } else {
    divBreadTop.removeChild(imgBreadTop)
    divBreadBottom.removeChild(imgBreadBottom)
  }

}

// Meat \\

function checkMeat(){


  let divMeat = document.getElementById("Meat");
  let createImgMeat = document.createElement("img");
  let imgMeat = document.getElementById("imgMeat")
  
  if (inputMeat.checked){
    divMeat.appendChild(createImgMeat)
    createImgMeat.id = "imgMeat";
    createImgMeat.src="img/lanchonete/meat.png";
  } else {
    divMeat.removeChild(imgMeat)
  }
}

// Cheese \\

function checkCheese(){


  let divCheese = document.getElementById("Cheese");
  let createImgCheese = document.createElement("img");
  let imgCheese = document.getElementById("imgCheese")
  
  if (inputCheese.checked){
    divCheese.appendChild(createImgCheese)
    createImgCheese.id = "imgCheese";
    createImgCheese.src="img/lanchonete/cheese.png";
  } else {
    divCheese.removeChild(imgCheese)
  }
}

// Bacon \\

function checkBacon(){

  let divBacon = document.getElementById("Bacon");
  let createImgBacon = document.createElement("img");
  let imgBacon = document.getElementById("imgBacon")
  
  if (inputBacon.checked){
    divBacon.appendChild(createImgBacon)
    createImgBacon.id = "imgBacon";
    createImgBacon.src="img/lanchonete/bacon.png";
  } else {
    divBacon.removeChild(imgBacon)
  }
}

// Lettuce \\

function checkLettuce(){

  let divLettuce = document.getElementById("Lettuce");
  let createImgLettuce = document.createElement("img");
  let imgLettuce = document.getElementById("imgLettuce")
  
  if (inputLettuce.checked){
    divLettuce.appendChild(createImgLettuce)
    createImgLettuce.id = "imgLettuce";
    createImgLettuce.src="img/lanchonete/lettuce.png";
  } else {
    divLettuce.removeChild(imgLettuce)
  }
}

// Onion \\

function checkOnion(){

  let divOnion = document.getElementById("Onion");
  let createImgOnion = document.createElement("img");
  let imgOnion = document.getElementById("imgOnion")
  
  if (inputOnion.checked){
    divOnion.appendChild(createImgOnion)
    createImgOnion.id = "imgOnion";
    createImgOnion.src="img/lanchonete/onion.png";
  } else {
    divOnion.removeChild(imgOnion)
  }
}

// Tomato \\

function checkTomato(){

  let divTomato = document.getElementById("Tomato");
  let createImgTomato = document.createElement("img");
  let imgTomato = document.getElementById("imgTomato")
  
  if (inputTomato.checked){
    divTomato.appendChild(createImgTomato)
    createImgTomato.id = "imgTomato";
    createImgTomato.src="img/lanchonete/tomato.png";
  } else {
    divTomato.removeChild(imgTomato)
  }
}

// Pickles \\

function checkPickles(){

  let divPickles = document.getElementById("Pickles");
  let createImgPickles = document.createElement("img");
  let imgPickles = document.getElementById("imgPickles")
  
  if (inputPickles.checked){
    divPickles.appendChild(createImgPickles)
    createImgPickles.id = "imgPickles";
    createImgPickles.src="img/lanchonete/pickles.png";
  } else {
    divPickles.removeChild(imgPickles)
  }
}

  /*
  
    


    imgBreadTop.src = "img/lanchonete/bread_top.png";
    imgBreadBottom.src = "img/lanchonete/bread_bottom.png";
    divHamburger.appendChild()
  }
*/

function showSobre(){
  let sectionSobre = document.getElementById("sobre").style.display = "flex";
  let sectionCoordenadas = document.getElementById("coordenadas").style.display = "none";
  let sectionClima = document.getElementById("clima").style.display = "none";
  let sectionLanchonete = document.getElementById("lanchonete").style.display = "none";
}
function showCoordenadas(){
  let sectionSobre = document.getElementById("sobre").style.display = "none";
  let sectionCoordenadas = document.getElementById("coordenadas").style.display = "flex";
  let sectionClima = document.getElementById("clima").style.display = "flex";
  let sectionLanchonete = document.getElementById("lanchonete").style.display = "none";
}

function showLanchonete(){
  let sectionSobre = document.getElementById("sobre").style.display = "none";
  let sectionCoordenadas = document.getElementById("coordenadas").style.display = "none";
  let sectionClima = document.getElementById("clima").style.display = "none";
  let sectionLanchonete = document.getElementById("lanchonete").style.display = "flex";
}

