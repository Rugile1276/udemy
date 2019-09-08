var p1Display = document.querySelector("#p1Result");
var p2Display = document.querySelector("#p2Result");

var p1Btn = document.querySelector("#p1Btn");
var p2Btn = document.querySelector("#p2Btn");
var resetBtn = document.querySelector("#resetBtn");
var winScoreInput = document.querySelector("#winScore");
var winScoreDisplay = document.querySelector("#winScoreDisplay");

var p1Result = 0;
var p2Result = 0;
var gameOver = false;
var winScore = 5;


p1Btn.addEventListener("click", function () {
	if (!gameOver) {
		p1Result++;
		if (winScore === p1Result) {
			gameOver = true;
			p1Display.classList.add("win");
		}
		p1Display.textContent = p1Result;
	}
})

p2Btn.addEventListener("click", function () {
	if (!gameOver) {
		p2Result++;
		if (winScore === p2Result) {
			gameOver = true;
			p2Display.classList.add("win");
		}
		p2Display.textContent = p2Result;
	}
})

winScoreInput.addEventListener("change", function () {
	reset();
	winScore = Number(winScoreInput.value);
	winScoreDisplay.textContent = winScore;
})

resetBtn.addEventListener("click", function (argument) {
	reset();
})

function reset () {
	p1Result = 0;
	p2Result = 0;
	winScore = 5;
	gameOver = false;

	p1Display.textContent = 0;
	p2Display.textContent= 0;

	winScoreDisplay.textContent = winScore;

	p1Display.classList.remove("win");
	p2Display.classList.remove("win");
}
