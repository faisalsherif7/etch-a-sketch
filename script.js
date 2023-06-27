const container = document.querySelector('.container');
let gridSize = 16;
createGrid(gridSize);

function createGrid(size) {
    const boxSize = 600 / size;
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.value = 'row';
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.classList.value = 'box';
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;
            row.appendChild(box);
        }
    }
    listenForHover();
}

const sizeButton = document.querySelector('.size-button')
sizeButton.addEventListener('click', () => {
    size = prompt('Enter number of squares per side: ');
    if (!(size > 0) || !(size <= 100)) {
        alert('Please enter a value between 1 and 100');
        return;
    }
    container.innerHTML = '';
    createGrid(size);
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => box.style.backgroundColor = 'transparent');
})

function listenForHover() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'teal';
    }))
}
