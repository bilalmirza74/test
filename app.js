//bill split application, currency app
//variables, functions, DOM

// console.log("app.js connected!!!")

// //variable => var,let and const
// let coffee = 'brew'
// coffee='nescafe'
// console.log(coffee)

// //functions
// function grinder(){
//     console.log('grinding...')
// }
// grinder()

// //btn action tar
// function feedback(){
//     document.getElementById('title');
//     title.innerText='thank'
//     let btn = document.getElementById('btn')
//     btn.style.display='none'
// }
//how to get warning message when input number increase 5?
let myInput = document.querySelector('input');
let oldValue = parseInt(myInput.value || 0);

function numberValueChange(el) {

  // other code you may have, etc.
  
  console.log('old value: ', oldValue);
  let newValue = parseInt(el.value);
  if (newValue > 5) {
    document.getElementById("hey").innerHTML =' <a href="https://bilalmirza.ml">click me</a>';
  } else if (newValue < 5) {
    console.log('The value decreased.');
  }
  oldValue = newValue;
}




//Source: https://stackoverflow.com/questions/73294264


