//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function getEvenArray(arr) {
  return arr.filter( ele => ele%2===0?true:false)
}

console.log(getEvenArray([1,2,3,4,5,6]));

