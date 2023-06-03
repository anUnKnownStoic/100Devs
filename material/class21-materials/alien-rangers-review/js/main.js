//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = [
  'Dahaad',
  'Class',
  'Citadel',
  'Peaky Blinders',
  'Tomorrow',
  'All of Us Are Dead',
  'Stranger Things',
  'Wednesday',
  'Crackdown',
];

tvShows.forEach((show) => console.log(show));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numbers = [1, 8, 46, 86, 9, 698.99, 88];
const evenArray = (arr) => arr.filter((ele) => ele % 2 === 0);
evenArray(numbers);
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumOf(numbers) {
  let sortedArray = numbers.sort((a,b)=>a - b);
  alert(sortedArray[1] + sortedArray[sortedArray.length - 2]);
}

sumOf(numbers);
