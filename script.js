const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {

    for (let j = 0; j < 16; j++) {

        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = `j: ${j}`;
        container.appendChild(square);    
    }

    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = `i: ${i}`;
    container.appendChild(square);
}