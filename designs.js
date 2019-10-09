// Function DOM SELECTOR
let select = function (x) {
  return document.querySelector(x);
};

// Select size input
const row = select("#inputHeight");
const col = select("#inputWidth");

// Select color input
const colorPicker = select("#colorPicker");
const pixelCanvas = select("#pixelCanvas");

// Color Picker
function colorPaint(e) {
  e.target.style.backgroundColor = colorPicker.value;
}


// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
}

