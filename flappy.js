var bird = document.getElementById("bird");
var pipeTop1 = document.getElementById("1top");
var pipeBottom1 = document.getElementById("1bottom");
var pipeTop2 = document.getElementById("top2");
var pipeBottom2 = document.getElementById("bottom2");
var gameArea = document.getElementById("game-area");
var pointText = document.getElementById("point-counter");
var gameoverText = document.getElementById("gameoverText");
var restartbtn = document.getElementById("restartbtn");
var jumpAud = new Audio("assets/hop.wav");
var music = new Audio("assets/Flappy.wav");
var mutebtn = document.getElementById("mute");

// variables for the bird's position
var birdTop = 100;
var birdLeft = 50;

// variables for the pipe's position
var pipeTopHeight = 0;
var pipeBottomHeight = 0;
var pipeSpeed = 3;

// listen for key presses
document.onkeydown = function (event) {
  if (event.key === " " || event.key === "ArrowUp" || event.key === "w") {
    // jump when the space bar is pressed
    jump();
  }
  if (event.key === "m") {
    mute();
  }
};
document.onmousedown = function (e) {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return;
  } else {
    jump();
  }
};
function jump() {
  if (alive === true) {
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
    birdrotation = -40;
    jumpAud.currentTime = 0;
    jumpAud.play();
  }
}

document.addEventListener("touchstart", jump);

var rpos = 600;
var birdrotation = 0;

function updateGame() {
  birdTop += 3;
  bird.style.top = birdTop + "px";
  if (bird.style.top === 450 + "px") {
    stopGame();
  }
  movePipe1();
  movePipe2();
  bird.style.transform = "rotate(" + birdrotation + "deg" + ")";
  birdrotation += 2;
  if (birdrotation >= 65) {
    birdrotation = 65;
  }
}
var pipespeed = 3;
var rpos1 = 0;
var rpos2 = -300;
function movePipe1() {
  pipeBottom1.style.right = rpos1 + "px";
  pipeTop1.style.right = rpos1 + "px";
  rpos1 += pipeSpeed;
  if (rpos1 >= 550) {
    pipeBottom1.style.transitionDuration = "0s";
    pipeTop1.style.transitionDuration = "0s";
    rpos1 = -50;
    var randompostop1 = Math.floor(Math.random() * 80);
    var randomposbot1 = Math.floor(Math.random() * 80);
    pipeBottom1.style.height = 70 + randomposbot1 + "px";
    pipeTop1.style.height = 70 + randompostop1 + "px";
  }
}

var gap = 200;
var topHeight = 0;
function movePipe2() {
  pipeBottom2.style.right = rpos2 + "px";
  pipeTop2.style.right = rpos2 + "px";
  rpos2 += pipeSpeed;
  if (rpos2 >= 550) {
    pipeBottom2.style.transitionDuration = "0s";
    pipeTop2.style.transitionDuration = "0s";
    rpos2 = -50;

    var randompostop2 = Math.floor(Math.random() * 80);
    var randomposbot2 = Math.floor(Math.random() * 80);

    pipeBottom2.style.height = 70 + randomposbot2 + "px";
    pipeTop2.style.height = 70 + randompostop2 + "px";
  }
}
checkForCollisions();
function checkForCollisions() {
  setInterval(() => {
    let obstaclePositions = pipeBottom1.getBoundingClientRect();
    let characterPositions = bird.getBoundingClientRect();
    let rightOverlap =
      characterPositions.right >= obstaclePositions.left &&
      characterPositions.right <= obstaclePositions.right;
    let bottomOverlap = characterPositions.bottom >= obstaclePositions.top;
    if (rightOverlap && bottomOverlap) {
      stopGame();
    }

    let obstaclePositions2 = pipeTop1.getBoundingClientRect();
    let bottomOverlap2 = characterPositions.top <= obstaclePositions2.bottom;
    let rightOverlap2 =
      characterPositions.right >= obstaclePositions2.left &&
      characterPositions.right <= obstaclePositions2.right;
    if (rightOverlap2 && bottomOverlap2) {
      stopGame();
    }

    let obstaclePositions3 = pipeBottom2.getBoundingClientRect();
    let bottomOverlap3 = characterPositions.bottom >= obstaclePositions3.top;
    let rightOverlap3 =
      characterPositions.right >= obstaclePositions3.left &&
      characterPositions.right <= obstaclePositions3.right;
    if (rightOverlap3 && bottomOverlap3) {
      stopGame();
    }
    let leftoverlap3 =
      characterPositions.left >= obstaclePositions.right &&
      characterPositions.bottom >= obstaclePositions.top;

    let obstaclePositions4 = pipeTop2.getBoundingClientRect();
    let bottomOverlap4 = characterPositions.top <= obstaclePositions4.bottom;
    let rightOverlap4 =
      characterPositions.right >= obstaclePositions4.left &&
      characterPositions.right <= obstaclePositions4.right;
    if (rightOverlap4 && bottomOverlap4) {
      stopGame();
    }
  }, 100);
}
start();

function stopGame() {
  // bird.style.visibility = "hidden";
  clearInterval(interval1);
  clearInterval(interval2);
  clearInterval(interval3);
  gameoverText.style.opacity = 1;
  restartbtn.style.visibility = "visible";

  // bird.style.transitionDuration = 0 +"s"
  gameArea.classList.remove("scroll");
  // birdTop = 75
  gameArea.style.backgroundColor = "#87CEEB";
  gameArea.style.backgroundImage = "url('assets/dead.png')";
  music.pause();
  music.currentTime = 0;
  pipeSpeed = 3;
  alive = false;
}

function addSpeed() {
  pipeSpeed += 0.01;
}
function addpoints() {
  points += 1;
  pointText.textContent = points;
}
function start() {
  bird.style.transitionDuration = 75 + "ms";
  interval1 = setInterval(addpoints, 1000);
  interval2 = setInterval(updateGame, 1000 / 60);
  interval3 = setInterval(addSpeed, 100);
  gameArea.classList.add("scroll");
  gameArea.style.backgroundImage = "url('assets/back.png')";
  music.loop = true;
  music.play();
  pipeSpeed = 3;
  birdTop = 75;
}
var deadheight = 0;

var points = 0;
function restart() {
  start();
  points = 0;
  bird.style.visibility = "visible";
  restartbtn.style.visibility = "hidden";
  gameoverText.style.opacity = 0;
  points = 0;
  pointText.textContent = points;
  birdrotation = -20;
  pipeBottom1.style.right = 0 + "px";
  pipeTop1.style.right = 0 + "px";
  pipeBottom2.style.right = -300 + "px";
  rpos1 = 0;
  pipeTop2.style.right = -300 + "px";
  rpos2 = -300;
  alive = true;
}
var muted = false;
function mute() {
  if (muted === false) {
    music.volume = 0;
    jumpAud.volume = 0;
    muted = true;
    mutebtn.textContent = "UNMUTE";
    return;
  }
  if (muted === true) music.volume = 1;
  jumpAud.volume = 1;
  muted = false;
  mutebtn.textContent = "MUTE";
  return;
}
var alive = true;
function yellow() {
  bird.style.backgroundImage = "url('assets/flappy sprite.png')"
  console.log("yellow");
}
function red() {
  bird.style.backgroundImage = "url('assets/flappy sprite red.png')"
}
function green() {
  bird.style.backgroundImage = "url('assets/flappy sprite green.png')"
}
function blue() {
  bird.style.backgroundImage = "url('assets/flappy sprite blue.png')"
}
function rainbow() {
  bird.style.backgroundImage = "url('assets/flappy sprite rainbow.png')"
}
function purple() {
  bird.style.backgroundImage = "url('assets/flappy sprite purple.png')"
}
