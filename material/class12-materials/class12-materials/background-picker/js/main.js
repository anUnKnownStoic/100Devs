// document.querySelectorAll('li').forEach((element) => {
//   addEventListener('click', changeBackground(this.id));
// });
const li = document.querySelectorAll('li');
li.forEach((el) => {
  el.addEventListener('click', ()=> {
    document.querySelector('body').style.background=`${el.id}`
  });
});

// function changeBackground(color) {
//   console.log(color);
// }


