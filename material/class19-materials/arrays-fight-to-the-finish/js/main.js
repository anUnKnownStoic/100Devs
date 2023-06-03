//Create an array of movie titles. Loop through the array and each element to the h2.

let head2 =document.querySelector('h2'); 
const movies = ['Indiana Jones', 'Fight Club', 'Poniyin Selvan','2018'];

movies.forEach(ele=> head2.innerText += ele);
//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let num = [1,2,3,4,5,6,7,8,9];
 num.forEach((ele,i,arr)=>  arr[i]+=3);
console.log(num);
//Find the average of all the numbers from question three
 