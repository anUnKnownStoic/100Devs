// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }

document.querySelector('#yell').addEventListener('click', composeName);

function composeName() {
  const fname = document.querySelector('#firstName').value;
  const fmiddle = document.querySelector('#firstMiddle').value;
  const lname = document.querySelector('#lastMiddle').value;
  const lmiddle = document.querySelector('#lastName').value;
  const yelling = `${fname} ${fmiddle} ${lmiddle} ${lname}`;
  document.querySelector('#placeToYell').innerText = yelling;
  let yellThis = new SpeechSynthesisUtterance(yelling);
  synth.speak(yellThis);
}
