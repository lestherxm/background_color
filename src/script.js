const background = document.querySelector('.bgcolor-container');
const btnColorChanger = document.querySelector('#btnColorChanger');
const audio = new Audio('../src/audio/action11.mp3');
audio.volume = 0.5;
const colors = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgrey"
];
let random = 0;
let previous = 0;


btnColorChanger.addEventListener('click', () => {
    audio.play();
    do {
        random = Math.floor(Math.random() * (colors.length - 1)) + 1;
    } while (random === previous);
    background.style.backgroundColor = colors[random];
    previous = random;
});