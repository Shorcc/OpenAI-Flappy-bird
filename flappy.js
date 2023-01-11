var bird = document.getElementById("bird");
var pipeTop1 = document.getElementById("1top");
var pipeBottom1 = document.getElementById("1bottom");
var pipeTop2 = document.getElementById("top2");
var pipeBottom2 = document.getElementById("bottom2");
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


function updateGame() {
    birdTop += 5;
    bird.style.top = birdTop + "px"
    if (bird.style.top === 450 + "px") {
      bird.remove()
    }
  movePipe1()
  movePipe2()
}
var rpos1 = 0
var rpos2 = -300
function movePipe1() {
  pipeBottom1.style.right = rpos1 + "px"
  pipeTop1.style.right = rpos1 + "px"
  rpos1 +=3;
  if (rpos1 >= 600) {
    pipeBottom1.style.transitionDuration = "0s"
    pipeTop1.style.transitionDuration = "0s"
    rpos1 = -20
    var randompostop1 = Math.floor(Math.random()*80)
    var randomposbot1 = Math.floor(Math.random()* 80)
    pipeBottom1.style.height = 70 + randomposbot1 + "px"
    pipeTop1.style.height = 70 + randompostop1 + "px"
  }
  console.log(rpos1)
}
function movePipe2() {
  pipeBottom2.style.right = rpos2 + "px"
  pipeTop2.style.right = rpos2 + "px"
  rpos2 +=3;
  if (rpos2 >= 600) {
    pipeBottom2.style.transitionDuration = "0s"
    pipeTop2.style.transitionDuration = "0s"
    rpos2 = -20
    var randompostop2 = Math.floor(Math.random()*80)
    var randomposbot2 = Math.floor(Math.random()*80)
    pipeBottom2.style.height = 70 + randomposbot2 + "px"
    pipeTop2.style.height = 70 + randompostop2 + "px"
  }
}
var randompos1 = 0;