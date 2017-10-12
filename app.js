var goombaPlus = document.querySelector("#goombas-plus");
var goombaMinus = document.querySelector("#goombas-minus");
var bobPlus = document.querySelector("#bob-plus");
var bobMinus = document.querySelector("#bob-minus");
var cheepPlus = document.querySelector("#cheep-plus");
var cheepMinus = document.querySelector("#cheep-minus");
var grandTotalElem = document.querySelector("#pest-grand-total");


//add event to goombaPlus
goombaPlus.addEventListener("click", function() {
  //Grab Num of goombas
  var goombaNumElem = document.querySelector("#goombas-num");
  var goombaNumValue = parseInt(goombaNumElem.textContent);
  //Grab total coin results for goombas
  var goombaResultElem = document.querySelector("#goombas-results");
  var goombaResultValue = parseInt(goombaResultElem.textContent);
  //Add to num of goombas
  document.querySelector("#goombas-num").innerHTML = goombaNumValue + 1;
  //Add to num of coins
  document.querySelector("#goombas-results").innerHTML = goombaResultValue + 5;
  //Grab grand total
  var grandTotal = parseInt(grandTotalElem.textContent);
  //Add to grand total
  document.querySelector("#pest-grand-total").innerHTML = grandTotal + 5;
  // Add zoomOutUp animation
  document.querySelector("#goomba-animate").classList.add("animated");
  document.querySelector("#goomba-animate").classList.add("zoomOutUp");
  setTimeout(function() {
    document.querySelector("#goomba-animate").classList.remove("zoomOutUp");
  }, 1300);

});



//add event to goombaMinus
goombaMinus.addEventListener("click", function() {
  //Grab Num of goombas
  var goombaNumElem = document.querySelector("#goombas-num");
  var goombaNumValue = parseInt(goombaNumElem.textContent);
  //Grab total coin results for goombas
  var goombaResultElem = document.querySelector("#goombas-results");
  var goombaResultValue = parseInt(goombaResultElem.textContent);
  //Add to num of goombas
  document.querySelector("#goombas-num").innerHTML = goombaNumValue - 1;
  //Add to num of coins
  document.querySelector("#goombas-results").innerHTML = goombaResultValue - 5;
  //Grab grand total
  var grandTotal = parseInt(grandTotalElem.textContent);
  //Remove from grand total
  document.querySelector("#pest-grand-total").innerHTML = grandTotal - 5;
  // Add speedLightOut animation
  document.querySelector("#goomba-animate").classList.add("animated");
  document.querySelector("#goomba-animate").classList.add("lightSpeedOut");
  setTimeout(function() {
    document.querySelector("#goomba-animate").classList.remove("lightSpeedOut");
  }, 1300);

});

//add event to bobPlus
bobPlus.addEventListener("click", function() {
  //Grab Num of bob
  var bobNumElem = document.querySelector("#bob-num");
  var bobNumValue = parseInt(bobNumElem.textContent);
  //Grab total coin results for bob
  var bobResultElem = document.querySelector("#bob-results");
  var bobResultValue = parseInt(bobResultElem.textContent);
  //Add to num of bob
  document.querySelector("#bob-num").innerHTML = bobNumValue + 1;
  //Add to num of coins
  document.querySelector("#bob-results").innerHTML = bobResultValue + 7;
  //Grab grand total
  var grandTotal = parseInt(grandTotalElem.textContent);
  //Add to grand total
  document.querySelector("#pest-grand-total").innerHTML = grandTotal + 7;
  // Add zoomOutUp animation
  document.querySelector("#bob-animate").classList.add("animated");
  document.querySelector("#bob-animate").classList.add("zoomOutUp");
  setTimeout(function() {
    document.querySelector("#bob-animate").classList.remove("zoomOutUp");
  }, 1300);
});

//add event to bobMinus
bobMinus.addEventListener("click", function() {
  //Grab Num of bob
  var bobNumElem = document.querySelector("#bob-num");
  var bobNumValue = parseInt(bobNumElem.textContent);
  //Grab total coin results for bob
  var bobResultElem = document.querySelector("#bob-results");
  var bobResultValue = parseInt(bobResultElem.textContent);
  //Add to num of bob
  document.querySelector("#bob-num").innerHTML = bobNumValue - 1;
  //Add to num of coins
  document.querySelector("#bob-results").innerHTML = bobResultValue - 7;
  //Grab grand total
  var grandTotal = parseInt(grandTotalElem.textContent);
  //Remove from grand total
  document.querySelector("#pest-grand-total").innerHTML = grandTotal - 7;
  // Add speedLightOut animation
  document.querySelector("#bob-animate").classList.add("animated");
  document.querySelector("#bob-animate").classList.add("lightSpeedOut");
  setTimeout(function() {
    document.querySelector("#bob-animate").classList.remove("lightSpeedOut");
  }, 1300);
});

//add event to cheepPlus
cheepPlus.addEventListener("click", function() {
  //Grab Num of cheep
  var cheepNumElem = document.querySelector("#cheep-num");
  var cheepNumValue = parseInt(cheepNumElem.textContent);
  //Grab total coin results for bob
  var cheepResultElem = document.querySelector("#cheep-results");
  var cheepResultValue = parseInt(cheepResultElem.textContent);
  //Add to num of bob
  document.querySelector("#cheep-num").innerHTML = cheepNumValue + 1;
  //Add to num of coins
  document.querySelector("#cheep-results").innerHTML = cheepResultValue + 11;
  //Grab grand total
  var grandTotal = parseInt(grandTotalElem.textContent);
  //Add to grand total
  document.querySelector("#pest-grand-total").innerHTML = grandTotal + 11;
  // Add zoomOutUp animation
  document.querySelector("#cheep-animate").classList.add("animated");
  document.querySelector("#cheep-animate").classList.add("zoomOutUp");
  setTimeout(function() {
    document.querySelector("#cheep-animate").classList.remove("zoomOutUp");
  }, 1300);
});

//add event to cheepMinus
cheepMinus.addEventListener("click", function() {
  //Grab Num of cheep
  var cheepNumElem = document.querySelector("#cheep-num");
  var cheepNumValue = parseInt(cheepNumElem.textContent);
  //Grab total coin results for bob
  var cheepResultElem = document.querySelector("#cheep-results");
  var cheepResultValue = parseInt(cheepResultElem.textContent);
  //Add to num of bob
  document.querySelector("#cheep-num").innerHTML = cheepNumValue - 1;
  //Add to num of coins
  document.querySelector("#cheep-results").innerHTML = cheepResultValue - 11;
  //Grab grand total
  var grandTotal = parseInt(grandTotalElem.textContent);
  //Remove from grand total
  document.querySelector("#pest-grand-total").innerHTML = grandTotal - 11;
  // Add speedLightOut animation
  document.querySelector("#cheep-animate").classList.add("animated");
  document.querySelector("#cheep-animate").classList.add("lightSpeedOut");
  setTimeout(function() {
    document.querySelector("#cheep-animate").classList.remove("lightSpeedOut");
  }, 1300);
});
