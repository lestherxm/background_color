const background = document.querySelector('.bgcolor-container');
const btnColorChanger = document.querySelector('#btnColorChanger');
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
    beepSound();
    do {
        random = Math.floor(Math.random() * (colors.length - 1)) + 1;
    } while (random === previous);
    background.style.backgroundColor = colors[random];
    previous = random;
    
});

/*
 * The AudioContext interface in the Web Audio API to generate simple sounds without the need for a pre-recorded sound file.
 */

function beepSound(){
    // This code basically makes possible the @beep when you click the button to change color.
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 130;
    oscillator.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.1);
}