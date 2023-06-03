//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', checkDay);

function checkDay() {
  let day = document.querySelector('#day').value;
  console.log(day);
  day = day.toLowerCase();
  console.log(day);
  switch (day) {
    case 'tuesday':
    case 'thursday':
      display('Time for class');
      break;
    case 'saturday':
    case 'sunday':
      display(`It's weekend`);
      break;
    default:
      display('Boring');
      break;
  }
}

function display(text) {
  document.querySelector('#placeToSee').innerText=text;
}
