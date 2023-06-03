//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [2, 43, 45, 5445, 6, 55];
alert(numbers.reduce((total, number) => (total += number), 0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareTheArray(arr) {
  return arr.map((ele) => Math.pow(ele, 2));
}
console.log(squareTheArray(numbers));
//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('Hello'));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkPalindrome(str) {
  str = str.toLowerCase();
  let isPalindrome = false;
  let j = str.length - 1;
  for (let i = 0; i < j; i++) {
    if (str.charAt(i) === str.charAt(j)) {
      isPalindrome = true;
      break;
    }
    j--;
  }
  if (isPalindrome) {
    console.log(`${str} is palindrome`);
  }
}

checkPalindrome('Malayyalam');
checkPalindrome('jdoe,a');
checkPalindrome('See-eeS');


