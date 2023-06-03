//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

let container = document.querySelector('#container');
for (let i = 0; i <= 21; i++) {
  const para = document.createElement('span');

  para.innerText = 21;
  container.append(para);
}
