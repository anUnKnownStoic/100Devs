// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
const favFood = 'dosa';
alert(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const str = 'kdnvksnfjn sdjdflan';
alert(str[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideTwoAndMultiply(n1, n2, n3) {
  return (n1 / n2) * n3;
}
divideTwoAndMultiply(6, 42, '7');

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function getCubeRoot(num) {
  return Math.cbrt(num);
}

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function loveForSummer(month) {
  switch (month) {
    case 'March':

    case 'April':

    case 'May':
      alert('YAY');
      break;

    default:
      alert('Booo');
      break;
  }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function printNumbersOtherThanMultiplesOfFive(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) continue;
    console.log(i);
  }
}
