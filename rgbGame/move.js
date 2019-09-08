var rgbDisplay = document.querySelector("#rgbDisplay");

var newColorBtn = document.querySelector("#newColor");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var header = document.querySelector("#header");
var secondRow = document.querySelector(".secondRow");
var message = document.querySelector("#message");

var randomColor;
var winCardNumber;
var winCardRgb;
var cards;
var rgbString;
var gameType = 6;

$(document).ready(function(){
	createNewBoard();
});


// Listeners for changing game type EASY -> HARD HARD -> EASY

easyBtn.addEventListener("click", function () {

	if (gameType === 6) {
		gameType = 3;
		this.classList.add("selected");
		hardBtn.classList.remove("selected");
		secondRow.classList.add("d-none");
		createNewBoard();
	}

});

hardBtn.addEventListener("click", function () {

	if (gameType === 3) {
		gameType = 6;
		this.classList.add("selected");
		easyBtn.classList.remove("selected");
		secondRow.classList.remove("d-none");

		createNewBoard();
	}

});

// Listener for changing board to new colors

newColorBtn.addEventListener("click", function () {
	createNewBoard();
})

// Loop to add "click" actions to each card

for (var i = 0; getCards().length > i; i++) {
	cards = getCards();
	cards[i].addEventListener("click", function () {
		if (this == cards[winCardNumber]){
			message.textContent = "Correct!";
			newColorBtn.textContent = "PLAY AGAIN?";
			changeColorsAfterWin(this);
		}else {
			message.textContent = "Try again!";
			removeCard(this);
		}
	})
}

function changeColorsAfterWin (card) {
	for (var j = 0; gameType > j; j++) {
		cards[j].classList.remove("d-none");
		cards[j].style.background = card.style.background;

	}
	header.style.background = card.style.background;
}



function createNewBoard () {
	header.style.background = "#4f81b0";
	message.textContent = "";
	newColorBtn.textContent = "NEW COLORS";

	cards = getCards();
	winCardNumber = getRandomNumber();
	for (var i = 0; gameType > i; i++) {
		cards[i].classList.remove("d-none");
		var newRgb = createRgbString();
		cards[i].style.background = newRgb;

		if (winCardNumber == i) {
			rgbDisplay.textContent = newRgb;
		}
	}
}

// Crete RGB string to be displayed in header
function createRgbString () {
	rgbString = 'RGB(';
	for (var i = 0; 2 >= i; i++) {
		randomColor = Math.floor((Math.random() * 255) );
		rgbString += randomColor;
		if (i !== 2){
			rgbString += ', ';
		}else {
			rgbString += ')'
		}
	}
	return rgbString;
}


function getCards () {
	return document.querySelectorAll(".card-body");
}

function getRandomNumber (){
	return Math.floor((Math.random() * gameType));
}

function removeCard (card) {
	card.classList.add("d-none");
}