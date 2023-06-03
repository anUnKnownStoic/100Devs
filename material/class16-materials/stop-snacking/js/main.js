//Create a function that grabs the number of snacks from the input and tells you to stop that many times

// function sayStopSnacking(num) {
//   console.log(num);
//   for (let i = 0; i <= num; i++) {
//     document.querySelector('#stops').innerText += 'Stop Snacking \t';
//   }
// }

// function grabSnack() {
//   let noOfSnacks = Number(document.querySelector('#number').value);
//   console.log(noOfSnacks);
//   sayStopSnacking(noOfSnacks);
// }

// document.querySelector('#help').addEventListener('click', grabSnack);

function solution(number) {
  let total = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
      total += i;
    }
  }
  return total;
}

solution(10);
