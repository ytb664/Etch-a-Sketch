const body = document.querySelector('body');
const container = document.querySelector('.container');
const btn = document.createElement('button');

// Insert button
btn.classList.add('btn');
btn.textContent = "Click to Change Grid Number";
body.insertBefore(btn, container);

createGrid(prompt());

// Create the box
function createGrid(gridNumber) {
    for (let i = 0; i < gridNumber; i++) {

        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        
        for (let j = 0; j < gridNumber; j++) {
    
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);    
        }
    }
}

const selected = document.querySelectorAll('.column');

// Coloring logic
for (let i = 0; i < selected.length; i++) {
    selected[i].addEventListener('mouseover', () => {
        selected[i].classList.add('colored');
    })
}