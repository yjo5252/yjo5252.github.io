//default image

var img1 = "./assets/graceinSeoul.png";
document.getElementById("image1").src = img1;

var img2 = "./assets/graceinEurope.png";
document.getElementById("image2").src = img2;

var img3 = "./assets/graceinUSA.png";
document.getElementById("image3").src = img3;

//toggle boutton 

function toggleAsia() {
  document.getElementById("image1").src = "./assets/South Korea.png";
  document.getElementById("image2").src = "./assets/Jeju/Jeju3.png";
  document.getElementById("image3").src = "./assets/Seoul/Seoul3.png";

}
function toggleEurope() {
  document.getElementById("image1").src = "./assets/Europe.png";
  document.getElementById("image2").src = "./assets/Nice/Nice3.png";
  document.getElementById("image3").src = "./assets/Paris/Paris3.png";
}
function toggleUSA() {
  document.getElementById("image1").src = "./assets/USA.png";
  document.getElementById("image2").src = "./assets/NewYork/NewYork3.png";
  document.getElementById("image3").src = "./assets/SanFrancisco/SanFrancisco3.png";

}
function toggleSeoul() {
  var city_name = "Seoul";
  var img;
  for (x = 1; x <= 3; x++) {
    img = "./assets/"+city_name+"/"+city_name+x+".png";
    console.log(img);
    document.getElementById("image"+x).src=img;
    document.getElementById("city-time").src="https://free.timeanddate.com/clock/i7upc7rv/n235/fn7/fs24/fc444/pct/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4";
    document.getElementById("city-name").innerHTML ="Seoul, South Korea";
  }
}
function toggleYeosu() {
  var city_name = "Yeosu";
  var img;
  for (x = 1; x <= 3; x++) {
    img = "./assets/"+city_name+"/"+city_name+x+".png";
    console.log(img);
    document.getElementById("image"+x).src=img;
    document.getElementById("city-name").innerHTML ="Yeosu, South Korea";
    document.getElementById("city-time").src="https://free.timeanddate.com/clock/i7upc7rv/n235/fn7/fs24/fc444/pct/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4";
  }
}
function toggleJeju() {
  var city_name = "Jeju";
  var img;
  for (x = 1; x <= 3; x++) {
    img = "./assets/"+city_name+"/"+city_name+x+".png";
    console.log(img);
    document.getElementById("image"+x).src=img;
    document.getElementById("city-name").innerHTML ="Jeju, South Korea";
    document.getElementById("city-time").src="https://free.timeanddate.com/clock/i7upc7rv/n235/fn7/fs24/fc444/pct/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4";
  }
}
function toggleParis() {
  var city_name = "Paris";
  var img;
  for (x = 1; x <= 3; x++) {
    img = "./assets/"+city_name+"/"+city_name+x+".png";
    console.log(img);
    document.getElementById("image"+x).src=img;
    document.getElementById("city-name").innerHTML ="Paris, France";
    document.getElementById("city-time").src="https://free.timeanddate.com/clock/i7upc7rv/n195/fn7/fs24/fc444/pct/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4";
  }
}

function toggleLondon() {
  var city_name = "London";
  var img;
  for (x = 1; x <= 3; x++) {
    img = "./assets/"+city_name+"/"+city_name+x+".png";
    console.log(img);
    document.getElementById("image"+x).src=img;
    document.getElementById("city-name").innerHTML ="London, United Kingdom";
    document.getElementById("city-time").src="https://free.timeanddate.com/clock/i7upc7rv/n136/fn7/fs24/fc444/pct/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4";
  }
}

function toggleNice() {
  var city_name = "Nice";
  var img;
  for (x = 1; x <= 3; x++) {
    img = "./assets/"+city_name+"/"+city_name+x+".png";
    console.log(img);
    document.getElementById("image"+x).src=img;
    document.getElementById("city-name").innerHTML ="Nice, France";
    document.getElementById("city-time").src="https://free.timeanddate.com/clock/i7upc7rv/n195/fn7/fs24/fc444/pct/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4";
  }
}

function toggleSan() {
  var city_name = "SanFrancisco";
  var img;
  for (x = 1; x <= 3; x++) {
    img = "./assets/"+city_name+"/"+city_name+x+".png";
    console.log(img);
    document.getElementById("image"+x).src=img;
    document.getElementById("city-name").innerHTML ="San Francisco, United States of America";
    document.getElementById("city-time").src="https://free.timeanddate.com/clock/i7upc7rv/n224/fn7/fs24/fc444/pct/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4";
  }
}
function toggleChicago() {
  var city_name = "Chicago";
  var img;
  for (x = 1; x <= 3; x++) {
    img = "./assets/"+city_name+"/"+city_name+x+".png";
    console.log(img);
    document.getElementById("image"+x).src=img;
    document.getElementById("city-name").innerHTML ="Chicago, United States of America";
    document.getElementById("city-time").src="https://free.timeanddate.com/clock/i7upc7rv/n64/fn7/fs24/fc444/pct/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4";
  }
}
function toggleNY() {
  var city_name = "NewYork";
  var img;
  for (x = 1; x <= 3; x++) {
    img = "./assets/"+city_name+"/"+city_name+x+".png";
    console.log(img);
    document.getElementById("image"+x).src=img;
    document.getElementById("city-name").innerHTML ="New York, United States of America";
    document.getElementById("city-time").src="https://free.timeanddate.com/clock/i7upc7rv/n179/fn7/fs24/fc444/pct/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4";
  }
}
