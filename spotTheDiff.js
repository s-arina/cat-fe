const startScreen = document.getElementById('start-screen');
const playButton = document.getElementById('play-button');
const time = document.getElementById('time');

const game = document.getElementById('game');
const disappear001 = document.getElementById('disappear001');
const differencesNum = document.querySelector('#differencesNum');
const instructions = document.getElementsByClassName('instructions')[0];
const try1 = document.querySelector('#span1');
const try2 = document.querySelector('#span2');
const try3 = document.querySelector('#span3');

const win = document.getElementById('win');
const gameoverScreen = document.getElementById('gameover-screen');

var differences = 5;
var attempts = 3;

function startGame() {
  if (playButton.style.display === 'inline-block') {
    startScreen.style.display = 'flex';
  } else {
    startScreen.style.display = 'none';
    game.style.display = 'flex';
  }

  if (startScreen.style.display === 'none') {
    var timeLeft = 90;
    const downloadTimer = setInterval(function function1() {
      time.innerHTML = timeLeft;

      if (timeLeft < 0) {
        clearInterval(downloadTimer);
        time.innerHTML = timeLeft;
        gameoverScreen.style.display = 'flex';
        game.style.display = 'none';
      } else if (differences === 0) {
        clearInterval(downloadTimer);
        instructions.style.animation = 'none';
      }
      --timeLeft;
    }, 1000);
  }
}

function correct001() {
  disappear001.innerHTML = `<img src="/assets/check.png" id="mark001"/>`;
  differencesNum.innerHTML = --differences;
  if (differences === 0) {
    win.style.display = 'flex';
    instructions.style.animation = 'none';
  }
}

function correct002() {
  disappear002.innerHTML = `<img src="/assets/check.png" id="mark001"/>`;
  differencesNum.innerHTML = --differences;
  if (differences === 0) {
    win.style.display = 'flex';
    instructions.style.animation = 'none';
  }
}

function correct003() {
  disappear003.innerHTML = `<img src="/assets/check.png" id="mark001"/>`;
  differencesNum.innerHTML = --differences;
  if (differences === 0) {
    win.style.display = 'flex';
    instructions.style.animation = 'none';
  }
}

function correct004() {
  disappear004.innerHTML = `<img src="/assets/check.png" id="mark001"/>`;
  differencesNum.innerHTML = --differences;
  if (differences === 0) {
    win.style.display = 'flex';
    instructions.style.animation = 'none';
  }
}

function correct005() {
  disappear005.innerHTML = `<img src="/assets/check.png" id="mark001"/>`;
  differencesNum.innerHTML = --differences;
  if (differences === 0) {
    win.style.display = 'flex';
    instructions.style.animation = 'none';
  }
}

function incorrect() {
  if (attempts === 3) {
    --attempts;
    try1.style.backgroundColor = 'rgb(216, 58, 71)';
  } else if (attempts === 2) {
    --attempts;
    try2.style.backgroundColor = 'rgb(216, 58, 71)';
  } else if (attempts <= 1) {
    try3.style.backgroundColor = 'rgb(216, 58, 71)';
    gameoverScreen.style.display = 'flex';
    game.style.display = 'none';
  }
}

function retryGame() {
  location.reload();
}
