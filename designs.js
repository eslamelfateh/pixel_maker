function getElement(id) {
  return document.getElementById(id);
}

const sizePickerForm = getElement('sizePicker');
const pixelCanvas = getElement('pixelCanvas');
const row = getElement('inputHeight');
const col = getElement('inputWidth');


function handleColorPaint(e) {
  const colorPicker = getElement('colorPicker');

  e.target.style.backgroundColor = colorPicker.value;
}

function makeGrid() {
  pixelCanvas.innerHTML = '';

  for (let r = 0; r < row.value; r++) {
    const tr = document.createElement('tr');

    for (let c = 0; c < col.value; c++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    tr.addEventListener('click', handleColorPaint);
    pixelCanvas.appendChild(tr);

    // we can use fragment DOM Element creation for huge implementation in DOM for best performance.
    // const fragment = document.createDocumentFragment();
    // fragment.appendChild(tr);
  }

  // gridCanvas.appendChild(fragment);
}

function handleSubmit(e) {
  e.preventDefault();
  makeGrid();
}

sizePickerForm.addEventListener('submit', handleSubmit);