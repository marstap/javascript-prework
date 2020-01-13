let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
function getMoveName(randomNumber){
  if(randomNumber >=2){
    return 'papier';
  }

  printMessage('Nie znam ruchu o id ' + randomNumber + '.');
  return 'nieznany ruch';
}

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2) {
	computerMove = 'papier'
}
else if (randomNumber == 3) {
	computerMove = 'norzyce'
}
*/
printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = playerInput(promt);
function getMoveName(promt){
  if(prompt == 1){
    return 'kamień';
  }
  printMessage('Nie znam ruchu o id ' + prompt + '.');
return 'nieznany ruch';
}

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
 printMessage('Twój ruch to: ' + playerInput);

else if(playerInput == '2'){
	playerMove = 'papier';
}
  printMessage('Twój ruch to: ' + playerInput);

else if(playerInput == '3'){
	playerMove = 'norzyce';
}
*/
  printMessage ('Twój ruch to: ' + playerInput);

if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywsz');
}

else if(computerMove == 'kameień' && playerMove == "norzyce"){
  printMessage('Komputer wygrywa');
}
else if(computerMove == 'kamień' && playerMove == 'norzyce') {
    printMessage('Remis');
}

  if(computerMove == 'papier' && playerMove == 'norzyce'){
    printMessage('Ty wygrywsz');
}
  else if(computerMove == 'papier' && playerMove == 'kameień'){
    printMessage('Komputer wygrywa');
}
  else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
}
if(computerMove == 'norzyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywsz');
}
  else if(computerMove == 'norzyce' && playerMove == 'papier'){
  printMessage('Komputer wygrywa');
}
else if(computerMove == 'norzyce' && playerMove == 'norzyce'){
  printMessage('Remis');
}
else {
  printMessage('nieznany ruch')
}
function displayResult(ComputerMove, PlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}
