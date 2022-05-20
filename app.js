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

//changes the color of thesquare when a corresponding letter is pressed.
document.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    turnRed();
  } else if (e.key === "g") {
    turnGreen();
  } else if (e.key == "o") {
    turnOrange();
  } else if (e.key === "r") {
    turnRed();
  } else if (e.key === "y") {
    turnYellow();
  } else if (e.key === "b") {
    turnBlue();
  }
})
// this turns the square back to black on keyup.
document.addEventListener("keyup", () => turnBlack());
/*Sunset effect*/

sunsetColors = ["#9EC2FF", "#7B9FF2", "#f4bbd3", "#fb6f92", "#212AA5", "#03018C", "#02014D"];

let btn = document.querySelector("button");
btn.onclick = watchSunset;

//counter for sunset function to iterate through the array
let i = 0;

// this function goes through the array each time the button is pressed for as long as the counter is less than the number of colors in the array. and after ach iteration it adds one to the counter to ready the next color. Once it reaches the end it tells you that the sunset event is over.
function watchSunset() {
  if (i < sunsetColors.length) {
    document.body.style.backgroundColor = sunsetColors[i];
    i++;
  } else {
    document.querySelector(".sunset p").textContent = "It's night now. Sunset over.. goodnight 🌚";
  }
}
