// script.js

// Función para actualizar el color y el código hexadecimal desde los controles de rango
function updateColorFromRange() {
    var red = document.getElementById('inputRed').value;
    var green = document.getElementById('inputGreen').value;
    var blue = document.getElementById('inputBlue').value;

    // Actualizar los inputs numéricos con los valores de los rangos
    document.getElementById('inputRedText').value = red;
    document.getElementById('inputGreenText').value = green;
    document.getElementById('inputBlueText').value = blue;

    updateColor(red, green, blue);
}

// Función para actualizar el color y el código hexadecimal desde los inputs numéricos
function updateColorFromText() {
    var red = document.getElementById('inputRedText').value;
    var green = document.getElementById('inputGreenText').value;
    var blue = document.getElementById('inputBlueText').value;

    // Asegurarse de que los valores estén dentro de los límites (0-255)
    red = Math.min(Math.max(red, 0), 255);
    green = Math.min(Math.max(green, 0), 255);
    blue = Math.min(Math.max(blue, 0), 255);

    // Actualizar los controles de rango con los valores de los inputs numéricos
    document.getElementById('inputRed').value = red;
    document.getElementById('inputGreen').value = green;
    document.getElementById('inputBlue').value = blue;

    updateColor(red, green, blue);
}

// Función para actualizar el cuadro de color y el código hexadecimal
function updateColor(red, green, blue) {
    var colorBox = document.getElementById('colorResult');
    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Actualizar el código hexadecimal
    var hexCode = document.getElementById('hexCode');
    var hex = rgbToHex(red, green, blue);
    hexCode.textContent = hex;

    // Actualizar el color picker con el valor hexadecimal
    document.getElementById('inputColorPicker').value = hex;
}

// Convertir RGB a Hexadecimal
function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

// Convertir Hexadecimal a RGB
function hexToRgb(hex) {
    var bigint = parseInt(hex.slice(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return [r, g, b];
}

// Función para actualizar los controles RGB y el cuadro de color a partir del color picker
function updateColorFromPicker() {
    var hex = document.getElementById('inputColorPicker').value;
    var rgb = hexToRgb(hex);

    // Actualizar los controles de rango y los inputs numéricos
    document.getElementById('inputRed').value = rgb[0];
    document.getElementById('inputGreen').value = rgb[1];
    document.getElementById('inputBlue').value = rgb[2];

    document.getElementById('inputRedText').value = rgb[0];
    document.getElementById('inputGreenText').value = rgb[1];
    document.getElementById('inputBlueText').value = rgb[2];

    updateColor(rgb[0], rgb[1], rgb[2]);
}

// Event listeners para actualizar el color cuando el usuario usa los controles de rango
document.getElementById('inputRed').addEventListener('input', updateColorFromRange);
document.getElementById('inputGreen').addEventListener('input', updateColorFromRange);
document.getElementById('inputBlue').addEventListener('input', updateColorFromRange);

// Event listeners para actualizar el color cuando el usuario introduce manualmente valores RGB
document.getElementById('inputRedText').addEventListener('input', updateColorFromText);
document.getElementById('inputGreenText').addEventListener('input', updateColorFromText);
document.getElementById('inputBlueText').addEventListener('input', updateColorFromText);

// Event listener para actualizar cuando el usuario selecciona un color con el picker
document.getElementById('inputColorPicker').addEventListener('input', updateColorFromPicker);

// Llamar a updateColorFromRange al cargar la página para mostrar un color inicial
updateColorFromRange();
