
// To change these values so they can be picked by user
let size = 16;
let currentColor = 'black';

const containerHeight = 500;
const containerWidth = 450;

const rowDimension = containerHeight / size;
const cellDimension = containerWidth / size;
const sketchContainer = document.querySelector('.sketch-container');

sketchContainer.style.minHeight = containerHeight + 'px';
sketchContainer.style.minWidth = containerWidth + 'px';

let mouseDown = 0;

document.body.addEventListener('mousedown', () => mouseDown++);
document.body.addEventListener('mouseup', () => mouseDown--);


function enterCell(ev) {
    if (mouseDown)
        ev.target.style.backgroundColor = currentColor;
}


function colorCell(ev) {
    ev.target.style.backgroundColor = 'black';
}

for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row-container');
    row.style.minHeight = rowDimension + 'px';

    for (let j = 0; j < size; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.minWidth = cellDimension + 'px';
        
        cell.addEventListener('mouseenter', enterCell);
        cell.addEventListener('mousedown', colorCell);

        row.appendChild(cell);
    }

    sketchContainer.appendChild(row);
}

