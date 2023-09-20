const body = document.querySelector('body');
const container = document.querySelector('.container');
const btn = document.createElement('button');
const colorButton = document.createElement('button');

// Run functions
createGrid(16);
colorLogic();

// Insert grid size button
btn.classList.add('grid-button');
btn.textContent = "Click to Change Grid Number";
body.insertBefore(btn, container);

// Insert random color button
colorButton.textContent = "Click to random the color";
body.appendChild(colorButton);

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

// Change grid size button
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

// Random color button
colorButton.addEventListener('click', () => {
    const selected = document.querySelectorAll('.column');

    for (let i = 0; i < selected.length; i++) {
        selected[i].classList.toggle('random-color');
    }
});

// Coloring logic
function colorLogic() {

    const selected = document.querySelectorAll('.column');

    for (let i = 0; i < selected.length; i++) {
        selected[i].addEventListener('mouseover', () => {

            if (selected[i].classList.contains('random-color')) {

                let randomRed = Math.round(Math.random() * 255);
                let randomGreen = Math.round(Math.random() * 255);
                let randomBlue = Math.round(Math.random() * 255);

                selected[i].style.backgroundColor = `rgb(${randomRed},
                    ${randomGreen}, ${randomBlue})`;
            } else {
                
                selected[i].style.backgroundColor = 'black';
            }
        });
    }
}