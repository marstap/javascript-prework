function playGame(playerInput){
  clearMessages ();
const messagesDOM = document.getElementById('messages');
function showMessage(message) {
  messagesDOM.innerHTML = message;
}

function getComputerMove() {
  const compMove = Math.floor(Math.random() * 3 + 1);
  switch (compMove) {
    case 1:
      return 'stone';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

function getUserMove() {
  const userMove = window.prompt();
  switch (parseInt(userMove)) {
    case 1:
      return 'stone';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

function result(userMove, computerMove) {
  if (userMove === 'stone' && computerMove === 'paper') {
    showMessage('Computer won this round!');
  } else if (userMove === 'stone' && computerMove === 'scissors') {
    showMessage('User won this round!');
  } else if (userMove === 'stone' && computerMove === 'stone') {
    showMessage('Its a draw!');
  }

  if (userMove === 'paper' && computerMove === 'paper') {
    showMessage('Its a draw!');
  } else if (userMove === 'paper' && computerMove === 'scissors') {
    showMessage('Computer won this round!');
  } else if (userMove === 'paper' && computerMove === 'stone') {
    showMessage('User won this round!');
  }

  if (userMove === 'scissors' && computerMove === 'paper') {
    showMessage('User won this round!');
  } else if (userMove === 'scissors' && computerMove === 'scissors') {
    showMessage('Its a draw!');
  } else if (userMove === 'scissors' && computerMove === 'stone') {
    showMessage('Computer won this round!');
  }
  playGame(3);
  }
}
const userMove = getUserMove();
const computerMove = getComputerMove();
console.log({userMove, computerMove});
result(userMove, computerMove);

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissor').addEventListener('click', function(){
  playGame(3);
});
