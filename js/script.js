{
function playGame (playerInput){
  clearMessages();
  function clearMessages (){
  }
  const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
      return 'papier';
    }
    if(argMoveId == 3){
      return 'nożyce'
    }
}
  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    console.log('moves:', argComputerMove, argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    }
    else {
      printMessage('Tym razem przegrywasz :(');
    }
  }
  displayResult(computerMove,playerInput);

}
document.getElementById("play-rock").addEventListener('click', function(){
  playGame('kamień');
});
document.getElementById("play-paper").addEventListener('click', function(){
  playGame('kamień');
});
document.getElementById("play-scissors").addEventListener('click', function(){
  playGame('nożyce');
});
}
