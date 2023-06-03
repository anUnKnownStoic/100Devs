// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
const favDrink = 'Kanjivellam';
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const str = 'dsfjfkndn apple sdkmlf hello  I amd lkd';
str.includes('apple');
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
  let num = Math.ceil(Math.random() * 3);
  switch (num) {
    case 2:
      console.log('rock');
      return 'rock';
      break;
    case 3:
      console.log('paper');
      return 'paper';
      break;

    default:
      console.log('scissors');
      return 'scissors';
      break;
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function findWinner(choice) {
  const compChoice = rockPaperScissor();
  if (compChoice === 'rock') {
    if (choice === 'rockPaperScissor') {
      console.log('You won');
    } else if (choice === 'rock') {
      console.log('It is a draw');
    } else if (choice === 'scissors') {
      console.log('Computer won');
    } else {
      console.log('Invalid Entry');
    }
  } else if (compChoice === 'paper') {
    if (choice === 'rock') {
      console.log('You won');
    } else if (choice === 'paper') {
      console.log('It is a draw');
    } else if (choice === 'scissors') {
      console.log('Computer won');
    } else {
      console.log('Invalid Entry');
    }
  } else {
    if (choice === 'paper') {
      console.log('You won');
    } else if (choice === 'scissors') {
      console.log('It is a draw');
    } else if (choice === 'rock') {
      console.log('Computer won');
    } else {
      console.log('Invalid Entry');
    }
  }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame(arr) {
  let times = arr.length;
  for (i = 0; i < times; i++) {
    let choice = prompt('Enter your choice').toLowerCase();
    findWinner(choice);
  }
}

playGame([2, 3, 4, 5, 1, 5, true, 'hai']);
