
let size = 16;
let currentColor = 'black';

const containerHeight = 550;
const containerWidth = 550;


const sketchContainer = document.querySelector('.sketch-container');

const clearButton = document.querySelector('.clear');
const fillButton = document.querySelector('.fill');
const toggleButton = document.querySelector('.toggle');

const slider = document.querySelector('.slider');
const sliderText = document.querySelector('.slider-text'); 

const colorPicker = document.querySelector('.color-picker');

sketchContainer.style.minHeight = containerHeight + 'px';
sketchContainer.style.minWidth = containerWidth + 'px';

let mouseDown = 0;

document.body.addEventListener('mousedown', (ev) => {
    if (ev.target != slider)
        ev.preventDefault();

    if (!mouseDown)
        mouseDown = 1;
});

document.body.addEventListener('mouseup', () => {
    if (mouseDown)
        mouseDown = 0;
});

function createSketch() {
    const rowDimension = containerHeight / size;
    const cellDimension = containerWidth / size;
    
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

    fillSketch('white');
}

function cleanSketch() {
    while(sketchContainer.firstChild) {
        row = sketchContainer.firstChild;
        while(row.firstChild) {
            row.removeChild(row.firstChild);
        }
        sketchContainer.removeChild(row);
    }
}

function enterCell(ev) {
    if (mouseDown)
        ev.target.style.backgroundColor = currentColor;
}


function colorCell(ev) {
    ev.target.style.backgroundColor = currentColor;
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

function updateSlider() {
    sliderText.textContent = 'Size: ' + slider.value + 'x' + slider.value;
    size = slider.value;
    cleanSketch();
    createSketch();
}


clearButton.addEventListener('click', () => fillSketch('white'));
fillButton.addEventListener('click', () => fillSketch(currentColor));
toggleButton.addEventListener('click', toggleSketch);
slider.addEventListener('input', updateSlider);
colorPicker.addEventListener('change', () => {
    mouseDown = 0;
    currentColor = colorPicker.value;
});

createSketch();