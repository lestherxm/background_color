const background = document.querySelector('.bgcolor-container');
const btnColorChanger = document.querySelector('#btnColorChanger');
const colors = ['red', 'green', 'blue', 'yellow']
let random = 0;
let previous = 0;

btnColorChanger.addEventListener('click', () => {
    do {
        random = Math.floor(Math.random() * (colors.length - 1)) + 1;
    } while (random === previous);
    background.style.backgroundColor = colors[random];
    previous = random;
});