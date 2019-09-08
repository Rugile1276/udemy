var rgbDisplay = document.querySelector("#rgbDisplay");

var newColorBtn = document.querySelector("#newColor");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var header = document.querySelector("#header");
var secondRow = document.querySelector(".secondRow");

var randomColor;
var winCardNumber;
var winCardRgb;
var cards;
var rgbString;
var gameType = 6;

$(document).ready(function(){
	createNewBoard();
});

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

newColorBtn.addEventListener("click", function () {
	resetBoard();
	createNewBoard();
})

	for (var i = 0; getCards().length > i; i++) {
		cards = getCards();
		cards[i].addEventListener("click", function () {
			if (this == cards[winCardNumber]){
				for (var j = 0; cards.length > j; j++) {
					cards[j].style.background = this.style.background;

				}
				header.style.background = this.style.background;
			}else {
				removeCard(this);
			}
		})
	}

function createNewBoard () {
	resetBoard();

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

function resetBoard () {
	header.style.background = "#4f81b0";
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