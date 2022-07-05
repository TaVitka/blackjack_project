  let firstCard = 5;
  let secondCard = 11;

  let sum = firstCard + secondCard;
  let hasBlackJack = false;
  let isAlive = true;

  let message = document.getElementById('message-el');
  let messageEl = document.getElementById('message-el');
  let sumEl = document.getElementById('card-sum');
  let cardsEl = document.getElementById('cards_num');

  message.textContent = 'Do you wan to play a game?'

function startGame() {
  renderGame()
}

function renderGame(){
  if (sum < 21) {
    message = 'Do you want to draw a new card?';
  }
  else if (sum === 21) {
   message = 'Congratulations! You have a Blackjack!';
    hasBlackJack = true;
  }
  else if (sum > 21) {
    message  = 'You are out of the game!';
    isAlive = false;
  }
  
  messageEl.textContent = message;
  sumEl.textContent = 'Sum: ' + sum;
  cardsEl.textContent = 'Cards: ' + firstCard + ' ' + secondCard;
}

function newCard() {
  let card = 5;
  sum += card;
  renderGame()
  cardsEl.textContent += ' ' + card;
}



