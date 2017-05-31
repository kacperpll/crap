var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".block");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("kolor");
var messageDisplay = document.querySelector("#stan");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

});
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function (){
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {

    squares[i].style.background = colors[i];
  }
  messageDisplay.textContent = "";
  resetButton.textContent = "new colors";
  h1.style.background = "rgb(0, 200, 255)";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function(){
  var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "You Win!";
      changeColors(clickedColor);
      h1.style.background = pickedColor;
      resetButton.textContent = "play again?";
    } else {
      this.style.background = "black";
      messageDisplay.textContent = "Try again?";
    }
  });
}

function changeColors(color)
{
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var red = Math.floor((Math.random() * 255) + 0);
  var green = Math.floor((Math.random() * 255) + 0);
  var blue = Math.floor((Math.random() * 255) + 0);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
