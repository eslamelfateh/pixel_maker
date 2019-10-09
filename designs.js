// Function DOM SELECTOR
function getElement(x) {
  return document.getElementById(x);
}

// Select size input
const row = getElement('inputHeight');
const col = getElement('inputWidth');

// Select color input
const colorPicker = getElement('colorPicker');
const pixelCanvas = getElement('pixelCanvas');

// Color Picker
function colorPaint(e) {
  e.target.style.backgroundColor = colorPicker.value;
}

// Making Grid
function makeGrid() {
  pixelCanvas.innerHTML = ""; /* For clear */
  for (let r = 0; r < row.value; r++) {
    const tr = document.createElement('tr');
    for (let c = 0; c < col.value; c++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
    tr.addEventListener('click', colorPaint);
    pixelCanvas.appendChild(tr);

    // const fragment = document.createDocumentFragment();
    // fragment.appendChild(tr);
  }
  /*gridCanvas.appendChild(fragment);   
  (we can use fragment DOM Element creation for huge implementation in DOM for best performance )*/
}

// When size is submitted by the user, call makeGrid()
getElement('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});
