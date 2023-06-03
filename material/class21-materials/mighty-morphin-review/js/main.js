// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday;
favHoliday ='Gandhi jayanthi'
console.log(favHoliday.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'lksmflkadcmowr';
alert(str.slice(0,str.length-3));
console.log(str);
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subFiveNumbersFromHundred(n1,n2,n3,n4,n5) {
  alert( Math.abs(100 - n1-n2-n3-n4-n5) );
}
subFiveNumbersFromHundred(1,2,120,3,4)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function maxandMin( n1,n2,n3) {
  console.log( Math.max(n1,n2,n3),Math.min(n1,n2,n3));
}
maxandMin(12,16,88)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function HorT() {
  Math.floor(Math.random()*2)%2 === 0?console.log('head'): console.log('tail');

}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function toss(x) {
  for(i=0;i<x;i++){
    Math.floor(Math.random()*2)%2 === 0 ?  console.log('head'): console.log('tail');
  }
}

toss(15);