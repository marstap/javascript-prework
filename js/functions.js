let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2) {
	computerMove = 'papier'
}
else if (randomNumber == 3) {
	computerMove = 'norzyce'
}
printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1') {
  playerMove = 'kamień';
}
printMessage('Twój ruch to: ' + playerInput);


else if(playerInput == '2'){
	playerMove = 'papier'
}
  printMessage('Twój ruch to: ' + playerInput);

else if (playerInput == '3'){
	playerMove = 'norzyce'
}
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
