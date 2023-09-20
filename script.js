const body = document.querySelector('body');
const container = document.querySelector('.container');
const btn = document.createElement('button');

// Insert button
btn.classList.add('btn');
btn.textContent = "Click to Change Grid Number";
body.insertBefore(btn, container);

createGrid(16);
colorLogic();

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

btn.addEventListener('click', () => {
    
    const theRow = document.querySelectorAll('.row');
    for (let i = 0; i < theRow.length; i++) {
        theRow[i].remove();
    }

    let newSize = -1;
    while (newSize < 0 || newSize > 100) {
        newSize = prompt();
        if (newSize === null) {
            newSize = 16;
        }
    }
    createGrid(newSize);
    colorLogic();
})

// Coloring logic
function colorLogic() {

    const selected = document.querySelectorAll('.column');

    for (let i = 0; i < selected.length; i++) {
        selected[i].addEventListener('mouseover', () => {
            selected[i].classList.add('colored');
        })
    }
}