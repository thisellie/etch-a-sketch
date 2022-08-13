let gridSize = 16;

const container = document.querySelector('#container');

function createGrid() {
    const grid = document.createElement('div');
    container.appendChild(grid);
    grid.classList.add('grid');
}

for (let i = 0; i < gridSize * gridSize; i++) {
    createGrid();    
}

const grid = document.querySelectorAll('.grid');
grid.forEach((grid) => {
    grid.addEventListener('mouseout', () => {
    grid.classList.add('paint');
    });
});

const size = document.querySelector('button');
size.onclick = () => {
    gridSize = parseInt(prompt('Enter the grid size'));
    container.setAttribute('style', `grid-template: repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr);`)
    document.querySelectorAll('.grid').forEach(grid => {
        grid.remove();
    });
    for (let i = 0; i < gridSize * gridSize; i++) {
        createGrid();    
    } 
    const grid = document.querySelectorAll('.grid').forEach((grid) => {
        grid.addEventListener('mouseout', () => {
        grid.classList.add('paint');
        });
    });
}