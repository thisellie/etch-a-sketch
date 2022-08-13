const container = document.querySelector('#container');

function createGrid() {
    const grid = document.createElement('div');
    container.appendChild(grid);
    grid.classList.add('grid');
}

for (let i = 0; i < 256; i++) {
    createGrid();    
}

const grid = document.querySelectorAll('.grid');
grid.forEach((grid) => {
    grid.addEventListener('mouseout', () => {
    grid.classList.add('paint');
    });
});
