var player1 = document.querySelector(".player-1");
var player2 = document.querySelector(".player-2");
var score1 = document.getElementById("score-1");
var score2 = document.getElementById("score-2");
var current1 = document.getElementById("current-1");
var current2 = document.getElementById("current-2");

var dicePic = document.querySelector(".dice");
var btnNew = document.querySelector(".btn-new");
var btnRoll = document.querySelector(".btn-roll");
var btnHold = document.querySelector(".btn-hold");

function reset() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  dicePic.classList.add("hidden");
  player1.classList.remove("player-winner");
  player2.classList.remove("player-winner");
  player1.classList.add("player-active");
  player2.classList.remove("player-active");
}
reset();

function switchPlayer() {
  if (activePlayer === 0) {
    current1.textContent = 0;
  } else {
    current2.textContent = 0;
  }

  currentScore = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
}

btnRoll.addEventListener("click", function () {
  if (playing) {
    dicePic.classList.remove("hidden");

    var rollInterval = setInterval(function () {
      var fakePic = Math.trunc(Math.random() * 6) + 1;
      dicePic.src = "dice-" + fakePic + ".png";
    }, 100);

    setTimeout(function () {
      clearInterval(rollInterval);
      var orgPic = Math.trunc(Math.random() * 6) + 1;
      dicePic.src = "dice-" + orgPic + ".png";
      if (orgPic !== 1) {
        currentScore += orgPic;
        if (activePlayer === 0) {
          current1.textContent = currentScore;
        } else {
          current2.textContent = currentScore;
        }
      } else {
        switchPlayer();
      }
    }, 3000);
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    if (activePlayer === 0) {
      score1.textContent = scores[0];
    } else {
      score2.textContent = scores[1];
    }

    if (scores[activePlayer] >= 100) {
      playing = false;
      dicePic.classList.add("hidden");

      if (activePlayer === 0) {
        player1.classList.add("player-winner");
        player1.classList.remove("player-active");
      } else {
        player2.classList.add("player-winner");
        player2.classList.remove("player-active");
      }
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", reset);
