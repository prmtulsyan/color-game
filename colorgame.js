var colors = randomColorPick(6);
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var colorDisplayed = document.getElementById("colorDisplayed");
var hardBtn = document.getElementById("hardBtn");
var easyBtn = document.getElementById("easyBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    var numSquare = 3;   
    colors = randomColorPick(numSquare);
    pickedColor = pickColor(); 
    message.textContent = "";
    colorDisplayed.textContent = pickedColor;
    for(var i = 0; i< square.length; i++){
        if(colors[i]){
            square[i].style.background = colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquare = 6;
    colors = randomColorPick(numSquare);
    pickedColor = pickColor(); 
    message.textContent = "";
    colorDisplayed.textContent = pickedColor;
    for(var i = 0; i< square.length; i++){
        square[i].style.background = colors[i];
        square[i].style.display = "block";
    }
});


resetButton.addEventListener("click",function(){
    if(easyBtn.classList.contains("selected")==true){
        numSquare=3;
    }
    else{
        numSquare=6;
    }
    colors = randomColorPick(numSquare);
    pickedColor = pickColor();
    h1.style.background = "steelblue";
    resetButton.textContent = "New Color";
    message.textContent = "";
    colorDisplayed.textContent = pickedColor;
    for(var i=0; i<square.length;i++){
        square[i].style.background = colors[i];
    }
});

colorDisplayed.textContent = pickedColor;

var square = document.querySelectorAll(".square");

var message = document.querySelector("#message");

for(var i = 0; i < colors.length;i++){
    //add colors to the squares
    square[i].style.backgroundColor = colors[i];

    //adding click event listener to each squares
    square[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(pickedColor==clickedColor){
            message.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
        }
        else{
            message.textContent="Try Again";
            this.style.backgroundColor="#232323";
        }   
    });
}

function changeColor(color) {
    for(var i = 0; i<square.length; i++){
        square[i].style.backgroundColor = color;
    }  
};

function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomColorPick(num){
    var arr = [];
    for(var i =0; i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    return "rgb("+r+", " +g+", "+ b +")";
}