const items = ["ROCK", "PAPER", "SCISSOR"];

let gameAccept = confirm("Shall we play Rock, Paper, Scissor");

if (gameAccept) {
  
  let continueGame = false;
  do {
    let input = prompt("Enter your choice : 'ROCK', 'PAPER' or 'SCISSOR'");
  while (input == null) {
    alert("Value has to be entered to play the game");
    input = prompt("Enter your choice : 'ROCK', 'PAPER' or 'SCISSOR'");
  }
    let outcome = checkWinner(input);
    alert("Output of the game : " + outcome);
    continueGame = confirm("Wanna continue game");
  } while (continueGame);
}

function checkWinner(userInput) {
  let computerIndex = Math.floor((Math.random() * 10) / 3);
  let computerInput = items[computerIndex - 1];
  if (computerInput === String(userInput).toUpperCase()) {
    return "Match Tied";
  }else if ((computerInput=="ROCK" && userInput=="PAPER")|| (computerInput=="PAPER" && userInput=="SCISSOR")){
    return "You win";
  }else {
    return "Computer win";
  }
}
