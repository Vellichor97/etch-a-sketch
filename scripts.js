
// To change these values so they can be picked by user
let size = 16;
let currentColor = 'black';

const containerHeight = 500;
const containerWidth = 500;

const rowDimension = containerHeight / size;
const cellDimension = containerWidth / size;
const sketchContainer = document.querySelector('.sketch-container');

const clearButton = document.querySelector('.clear');
const fillButton = document.querySelector('.fill');
const toggleButton = document.querySelector('.toggle');

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

function fillSketch(color) {
    for(let row of sketchContainer.childNodes) {
        for(let cell of row.childNodes) {
            cell.style.backgroundColor = color;
        }
    }
}

function toggleSketch() {
    for(const row of sketchContainer.childNodes) {
        for(const cell of row.childNodes) {
            if ((! cell.style.borderStyle) || (cell.style.borderStyle == 'solid'))
                cell.style.borderStyle = 'none';
            else
                cell.style.borderStyle = 'solid';
        }
    }
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


clearButton.addEventListener('click', () => fillSketch('white'));
fillButton.addEventListener('click', () => fillSketch('red'));
toggleButton.addEventListener('click', toggleSketch);
