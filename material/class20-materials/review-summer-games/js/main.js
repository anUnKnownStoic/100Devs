//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
const ar = [1,2,3,4,5,6,7,8]

function getProductOfAnArray(arr) {
  return arr.reduce((product,num)=> product*=num,1);
}



console.log(getProductOfAnArray(ar));