total = 0;

function changeResult(result) {
  document.querySelector('#resultSpan').innerText = result;
}

document.querySelector('#zero').addEventListener('click', () => {
  total = 0;
  changeResult(total);
});
document.querySelector('#plusThree').addEventListener('click', () => {
  total = total + 3;
  changeResult(total);
});
document.querySelector('#plusNine').addEventListener('click', () => {
  total = total + 9;
  changeResult(total);
});
document.querySelector('#minusTwo').addEventListener('click', () => {
  total = total - 2;
  changeResult(total);
});
