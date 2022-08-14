let gridSize = 16;
let lightness = 100;
let counter = 1;

function createCanvas() {
    container.setAttribute('style', 
    `grid-template: repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr);`);
    for (let i = 0; i < gridSize * gridSize; i++) {
        const grid = document.createElement('div');
        document.querySelector('#container').appendChild(grid);
        grid.classList.add('grid');
    }   document.querySelectorAll('.grid').forEach((grid) => {
        grid.addEventListener('mouseover', () => { grid.setAttribute('style', 
        `background-color: ${setRandomColor()}`)
    }); grid.addEventListener('mouseout', () => { grid.setAttribute('style', 
        `background-color: ${trailColor}`)
    }); counter = 1; lightness = 100; });
} 

function setRandomColor() {
    if (counter > 10) {
        console.log(`If statement: ${counter} & ${lightness}`);
        counter = 1; lightness = 100; 
        trailColor = 'hsl(0, 0%, 0%)';
        return trailColor;
    } else {
        console.log(`${counter} & ${lightness}`);
        trailColor = createRandomColor();
        lightness -= 10; counter++;
        return trailColor;
    }
}

function createRandomColor() {
    let hue = 1 + Math.random() * (360 - 1);
    let saturation = 0 + Math.random() * (100 - 0);
    return `hsl(${hue.toFixed()}, ${saturation.toFixed()}%, ${lightness}%)`
}

document.querySelector('button').onclick = () => {
    gridSize = parseInt(prompt('Enter the grid size'));
    if (gridSize > 100 || gridSize < 2) {
        alert('Invalid grid size! Try again');
        gridSize = parseInt(prompt('Enter an acceptable grid size'));
    }   document.querySelectorAll('.grid').forEach(grid => { grid.remove(); });
        createCanvas();
    }

createCanvas();