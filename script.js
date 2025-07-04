var numSquare = 6;
var colors = [];
var winColor;
var squares = document.querySelectorAll(".square");
var heading = document.querySelector("div h1"); 
var head = document.querySelector("#head");
var msgDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
   setUpmodeButtons();
   setUpSquares();
   reset();
}

function setUpmodeButtons(){
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY MODE"? numSquare=3: numSquare=6;
            reset();
        })
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === winColor){
                changeColors(winColor);
                msgDisplay.textContent = "CORRECT!!!"
                resetButton.textContent = "PLAY AGAIN?"
            }else{
                this.style.backgroundColor = "#232323";
                msgDisplay.textContent = "TRY AGAIN!!!";
            }
        })
    }
}


function reset(){
    colors = generateRandomColors(numSquare);
    winColor = pickcolor();
    heading.innerHTML = winColor;
    resetButton.textContent = "NEW COLORS";
    msgDisplay.textContent = "";
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    head.style.backgroundColor = "rgb(205, 121, 12)";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
        head.style.backgroundColor = color;
    }
}

function pickcolor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    var r =  Math.floor(Math.random()*256);
    var g =  Math.floor(Math.random()*256);
    var b =  Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}