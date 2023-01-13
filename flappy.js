var bird = document.getElementById("bird");
var pipeTop1 = document.getElementById("1top");
var pipeBottom1 = document.getElementById("1bottom");
var pipeTop2 = document.getElementById("top2");
var pipeBottom2 = document.getElementById("bottom2");
var gameArea = document.getElementById("game-area");
var pointText = document.getElementById("point-counter")
var gameoverText = document.getElementById("gameoverText");
var restartbtn = document.getElementById("restartbtn")

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
    birdTop += 3;
    bird.style.top = birdTop + "px"
    if (bird.style.top === 450 + "px") {
      stopGame();
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
  if (rpos1 >= 550) {
    pipeBottom1.style.transitionDuration = "0s"
    pipeTop1.style.transitionDuration = "0s"
    rpos1 = -20
    var randompostop1 = Math.floor(Math.random()*80)
    var randomposbot1 = Math.floor(Math.random()* 80)
    pipeBottom1.style.height = 70 + randomposbot1 + "px"
    pipeTop1.style.height = 70 + randompostop1 + "px"
  }
  
}
function movePipe2() {
  pipeBottom2.style.right = rpos2 + "px"
  pipeTop2.style.right = rpos2 + "px"
  rpos2 +=3;
  if (rpos2 >= 550) {
    pipeBottom2.style.transitionDuration = "0s"
    pipeTop2.style.transitionDuration = "0s"
    rpos2 = -20
    var randompostop2 = Math.floor(Math.random()*80)
    var randomposbot2 = Math.floor(Math.random()*80)
    pipeBottom2.style.height = 70 + randomposbot2 + "px"
    pipeTop2.style.height = 70 + randompostop2 + "px"
  }
}
checkForCollisions();
function checkForCollisions() {
  setInterval(() => {
      let obstaclePositions = pipeBottom1.getBoundingClientRect();
      let characterPositions = bird.getBoundingClientRect();
      let rightOverlap = (characterPositions.right >= obstaclePositions.left && characterPositions.right <= obstaclePositions.right);
      let bottomOverlap = (characterPositions.bottom >= obstaclePositions.top);
      if (rightOverlap && bottomOverlap) {
          stopGame();
          
      }

      let obstaclePositions2 = pipeTop1.getBoundingClientRect();
      let bottomOverlap2 = (characterPositions.top <= obstaclePositions2.bottom);
      let rightOverlap2 = (characterPositions.right >= obstaclePositions2.left && characterPositions.right <= obstaclePositions2.right); 
      if (rightOverlap2 && bottomOverlap2) {
        stopGame();
      }
 
      let obstaclePositions3 = pipeBottom2.getBoundingClientRect();
      let bottomOverlap3 = (characterPositions.bottom >= obstaclePositions3.top);
      let rightOverlap3 = (characterPositions.right >= obstaclePositions3.left && characterPositions.right <= obstaclePositions3.right);
      if (rightOverlap3 && bottomOverlap3) {
        stopGame();
      }
      let leftoverlap3 = (characterPositions.left >= obstaclePositions.right && characterPositions.bottom >= obstaclePositions.top)

      let obstaclePositions4 = pipeTop2.getBoundingClientRect();
      let bottomOverlap4 = (characterPositions.top <= obstaclePositions4.bottom);
      let rightOverlap4 = (characterPositions.right >= obstaclePositions4.left && characterPositions.right <= obstaclePositions4.right)
      if (rightOverlap4 && bottomOverlap4) {
        stopGame();
      }

  }, 40)

};
start()
function stopGame() {
  bird.remove();
  clearInterval(interval1)
  gameoverText.style.opacity = 1;
  restartbtn.style.visibility = "visible"
}
function addpoints()  {
  points += 1;
  pointText.textContent = points
  console.log(points)
}
function start() {
interval1 = setInterval(addpoints, 1000)
}

var points = 0;
function restart() {
  location.reload();
}
