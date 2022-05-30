const redElement = document.querySelector(".red");
const cyanElement = document.querySelector(".cyan");
const violetElement = document.querySelector(".violet");
const orangeElement = document.querySelector(".orange");
const pinkElement = document.querySelector(".pink");

const centerElement = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
};

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        centerElement.style.background = color;
    });
};

magicColorChanger(redElement, getBGColor(redElement));
magicColorChanger(cyanElement, getBGColor(cyanElement));
magicColorChanger(orangeElement, getBGColor(orangeElement));
magicColorChanger(pinkElement, getBGColor(pinkElement));