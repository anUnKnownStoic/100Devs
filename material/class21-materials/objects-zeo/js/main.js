//Create a stopwatch object that has four properties and three methods
const today = new Date();
const stopwatch = {
  color:'black',
  buttons:2,
  time: stopwatch.getCurrentTime,
  company: 'Rolex',

  getCurrentTime(){
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  }
}