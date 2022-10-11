let isAlive = false;
let hasBlackJack = false;
let message = '';
let sum = 0;
let cards = [];

const restartEl = document.getElementById('restart-el');
const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const playerEl = document.getElementById('player-el');
const newCardEl = document.getElementById('newCard-el');
const startGameEl = document.getElementById('startGame-el');
restartEl.style.display = 'none';
newCardEl.style.display = 'none';

let player = {
	name: 'Mehmet',
	chips: 2000
};
playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
	let val = Math.floor(Math.random() * 13 + 1);
	if (val === 1) {
		return 11;
	} else if (val >= 10) {
		return 10;
	} else {
		return val;
	}
}

function startGame() {
	startGameEl.style.display = 'none';
	newCardEl.style.display = 'inline-block';
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	sum = firstCard + secondCard;
	cards = [ firstCard, secondCard ];
	renderGame();
}

function renderGame() {
	for (let cardVal of cards) {
		cardsEl.textContent += cardVal + ' ';
	}

	sumEl.textContent = `Sum:${sum}`;
	if (sum <= 20) {
		message = 'Do you want to draw a new card?';
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
		restartEl.style.display = 'inline-block';
		newCardEl.style.display = 'none';
	} else {
		message = "You're out of the game!";
		isAlive = false;
		restartEl.style.display = 'inline-block';
		newCardEl.style.display = 'none';
	}

	messageEl.textContent = message;
}

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let newCard = getRandomCard();
		sum += newCard;
		cards.push(newCard);
		console.log(cards);
		cardsEl.textContent = 'Cards:';
		renderGame();
	}
}
function restart() {
	cardsEl.textContent = 'Cards:';
	hasBlackJack = false;
	restartEl.style.display = 'none';
	startGame();
}
