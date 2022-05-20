let mySquare = document.body.querySelector(".square");

/* event handlers */

//here i declared the functions as variables.
let turnBlue, turnGreen, turnOrange, turnRed, turnYellow, turnBlack;

// here are the functions for the evet handlers
turnBlue = function () {
  mySquare.style.backgroundColor = "blue";
}
turnGreen = function () {
  mySquare.style.backgroundColor = "green";
}
turnOrange = function () {
  mySquare.style.backgroundColor = "orange";
}
turnRed = function () {
  mySquare.style.backgroundColor = "red";
}
turnYellow = function () {
  mySquare.style.backgroundColor = "yellow";
}
turnBlack = function () {
  mySquare.style.backgroundColor = "black";
}

// event listeners
mySquare.onmouseover = turnBlue;
mySquare.onmousedown = turnRed;
mySquare.onmouseup = turnYellow;
mySquare.ondblclick = turnGreen;
mySquare.onwheel = turnOrange;
mySquare.onmouseout = turnBlack;




