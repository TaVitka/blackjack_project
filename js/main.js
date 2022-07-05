  let cards = []
  let sum = 0;
  let hasBlackJack = false;
  let isAlive = false;

  let message = document.getElementById('message-el');
  let messageEl = document.getElementById('message-el');
  let sumEl = document.getElementById('card-sum');
  let cardsEl = document.getElementById('cards_num');
  let playerEl = document.getElementById('player-el');
  
  let playerObject = {
    name: 'Per',
    chips: 100
  };

  playerEl.textContent = playerObject.name + ' $' + playerObject.chips; 
  
  message.textContent = 'Do you wan to play a game?'


  function getRandomCard() {
    let randomCard = Math.floor ( Math.random() * 13) + 1;
    if (randomCard === 1) {
      return 11
    } else if (randomCard > 10) {
      return 10
    } else {
      return randomCard
    }
    
  }

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
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
  cardsEl.textContent = 'Cards: '

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ' 
  }

}


function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let card = getRandomCard();
    cards.push(card)
    sum += card;
    renderGame()
  }
}

