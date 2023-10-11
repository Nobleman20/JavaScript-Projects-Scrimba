let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "Nuel",
  chips: 130,
};

let playerEl = document.getElementById("player-el");

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard >= 11) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let card1 = getRandomCard();
  let card2 = getRandomCard();
  let cards = [card1, card2];
  let sum = card1 + card2;
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to roll another dice?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out!";
    isAlive = false;
  }
  messageEl.textContent = message;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = `Sum: ${sum}`;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    startGame();
  }
}

playerEl.textContent = `${player.name}: $${player.chips}`;
