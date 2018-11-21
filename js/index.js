// using this file is optional
// you can also load the code snippets in using your browser's console

document.addEventListener("DOMContentLoaded", () => {

// select the first p element:

// let p = document.querySelector('p')

// select all p elements:

let p = document.querySelectorAll('p')

//use this function in the addEventListener when p is clicked:

const clickLog = function (e) {
  console.log(`You clicked ${this.innerHTML} at X ${e.screenX} and Y ${e.screenY}`); //console log message w/ coordinates of click
  this.style.color = "#00ff00" //turns p text green
  this.style.backgroundColor = "#444" //turns background color dark
}

//call addEventListener on p:

// p.addEventListener('click', clickLog)

//call addEventListener click event using clickLog function on all p:

for (i=0; i < p.length; i++) {
  p[i].addEventListener('click', clickLog)
}


});
