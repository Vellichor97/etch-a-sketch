

let size = 16;

const containerHeight = 500;
const containerWidth = 450;

const rowDimension = containerHeight / size;
const cellDimension = containerWidth / size;
const sketchContainer = document.querySelector('.sketch-container');

sketchContainer.style.minHeight = containerHeight + 'px';
sketchContainer.style.minWidth = containerWidth + 'px';

for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row-container');
    row.style.minHeight = rowDimension + 'px';
    // alert(row.style.minHeight);

    for (let j = 0; j < size; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.minWidth = cellDimension + 'px';

        row.appendChild(cell);
    }

    sketchContainer.appendChild(row);
}

