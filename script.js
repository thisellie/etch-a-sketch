let gridSize = 16;
let lightness = 100;

function createCanvas() {
    canvas.setAttribute('style', 
    `grid-template: repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr);`);
    for (let i = 0; i < gridSize * gridSize; i++) {
        const grid = document.createElement('div');
        canvas.appendChild(grid);
        grid.classList.add('grid');
    } 
} 

function toggleBrush(mode) {
    switch (mode) {
        case 'Color':
            document.querySelectorAll('.grid').forEach(grid => {grid.replaceWith(grid.cloneNode(true))})
            document.querySelectorAll('.grid').forEach(grid => {grid.addEventListener('mouseover', () => {grid.setAttribute('style',`background-color: #000`)})});
            break;
        case 'Random':
            document.querySelectorAll('.grid').forEach(grid => {grid.replaceWith(grid.cloneNode(true))})
            document.querySelectorAll('.grid').forEach(grid => {grid.addEventListener('mouseover', () => {grid.setAttribute('style', `background-color: ${setRandomColor()}`)})}); 
            break;
        case 'Eraser':
            document.querySelectorAll('.grid').forEach(grid => {grid.replaceWith(grid.cloneNode(true))})
            document.querySelectorAll('.grid').forEach(grid => {grid.addEventListener('mouseover', () => {grid.removeAttribute('style')})}); 
            break;
    }
}

function setRandomColor() {
    if (lightness === 10) {
        lightness = 100; 
        return 'black';
    } else {
        lightness -= 10;
        return createRandomColor();
    }
}

function createRandomColor() {
    let hue = 1 + Math.random() * (360 - 1);
    let saturation = 0 + Math.random() * (100 - 0);
    return `hsl(${hue.toFixed()} ${saturation.toFixed()}% ${lightness}%)`
}

document.querySelector('#size').onclick = () => {
    gridSize = parseInt(prompt('Enter the grid size'));
    if (gridSize > 100 || gridSize < 2) {
        alert('Invalid grid size! Try again');
        gridSize = parseInt(prompt('Enter an acceptable grid size'));
    }   document.querySelectorAll('.grid').forEach(grid => { grid.remove(); });
        createCanvas();
    }

document.querySelector('#clear').onclick = () => {document.querySelectorAll('.grid').forEach((grid) => {grid.removeAttribute('style')})}
document.querySelector('#eraser').onclick = () => {toggleBrush('Eraser')}
document.querySelector('#random').onclick = () => {toggleBrush('Random')}
document.querySelector('#color').onclick = () => {toggleBrush('Color')}

createCanvas();
toggleBrush('Color');