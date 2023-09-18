const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {

    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    
    for (let j = 0; j < 16; j++) {

        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);    
    }
}

const selected = document.querySelectorAll('.column');

for (let i = 0; i < selected.length; i++) {
    selected[i].addEventListener('mouseover', () => {
        selected[i].classList.toggle('colored');
    })
}