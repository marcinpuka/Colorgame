var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++) {
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
   colors = generateRandomColors(numberOfSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   this.textContent = "New Colors";
   messageDisplay.textContent = "";
   for(var i=0; i<squares.length; i++) {
       squares[i].style.backgroundColor = colors[i];
   }
   h1.style.backgroundColor = "steelblue";
});

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector('#message');

for(var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
}

function changeColors(color) {
    //loop through all squares 
    for (var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    var random = Math.floor(Math.random() *colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colorst to array
    for (var i=0; i<num; i++) {
        //get random collor and push into array 
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);  
  var g = Math.floor(Math.random() * 256);  
  var b = Math.floor(Math.random() * 256);
    
   return "rgb(" + r+", "+ g+ ", " +b+")";
};