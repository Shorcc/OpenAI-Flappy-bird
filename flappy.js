var bird = document.getElementById("bird");
var pipeTop = document.getElementById("pipe-top");
var pipeBottom = document.getElementById("pipe-bottom");
var gameArea = document.getElementById("game-area");

// variables for the bird's position
var birdTop = 100;
var birdLeft = 50;

// variables for the pipe's position
var pipeTopHeight = 0;
var pipeBottomHeight = 0;
var pipeSpeed = 3;

// listen for key presses
document.onkeydown = function(event) {
  if (event.keyCode === 32) {
    // jump when the space bar is pressed
    
        birdTop -= 20;
        bird.style.top = birdTop + "px";
        birdTop -= 20;
        bird.style.top = birdTop + "px";
        birdTop -= 20;
        bird.style.top = birdTop + "px";
        birdTop -= 20;
        bird.style.top = birdTop + "px";
        birdTop -= 20;
        bird.style.top = birdTop + "px";
        

   
  }
};


// update the game 60 times per second
setInterval(updateGame, 1000/60);






var rpos = 600
setInterval(placePipe, 1000);
function placePipe() {
    newpipe1 = document.createElement("div")
    newpipe1.setAttribute("id", "pipe-bottom")
    newpipe2 = document.createElement("div")
    newpipe2.setAttribute("id", "pipe-top")
    gameArea.append(newpipe1);
    gameArea.append(newpipe2);
    newpipe1.style.right = -50 + "px"
    newpipe2.style.right = -50 + "px"
}

function updateGame() {
    birdTop += 5;
    bird.style.top = birdTop + "px"
    newpipe1.style.right = rpos + "px"
    newpipe2.style.right = rpos + "px"
    if (bird.style.top === 450 + "px") {
      bird.remove()
    }
  
}
