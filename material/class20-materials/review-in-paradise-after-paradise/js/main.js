// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function alertBasedOnFirstAndLast(array) {
  switch (true) {
    case arr[0] > arr[arr.length - 1]:
      alert('Hi');
      break;
    case arr[0] < arr[arr.length - 1]:
      alert('Bye');
      break;

    default:
      alert('We close in an hour');
      break;
  }
}
