const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const dropdownMenu = document.querySelector('.dropdown-menu');
const swapToCelsius = document.querySelector('.swapToCelsius');
const swapToFahrenheit = document.querySelector('.swapToFahrenheit');
const C = document.querySelector('.C');
const F = document.querySelector('.F');

/* Swap Function for Dropdown Menu */
const swapToCelsiusFunc = () => {
    C.innerHTML = '°C';
    F.innerHTML = '°F';
    converter.placeholder = "Temperature in °C";
};

const swapToFahrenheitFunc = () => {
    C.innerHTML = '°F';
    F.innerHTML = '°C';
    converter.placeholder = "Temperature in °F";
};

/* Reset Function */
const reset = () => {
    converter.value = '';
    result.innerHTML = '';
}

/* Convert Function */
const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "black";
        if (C.innerHTML === '°C') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}°C is equal to ${value.toFixed(2)}°F`;
        } else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = `${converter.value}°F is equal to ${value.toFixed(2)}°C`;
        }
    } else if (converter.value == '') {
        result.style.color = "#993300";
        result.innerHTML = 'Enter some number';
    } else {
        result.style.color = "#993300";
        result.innerHTML = 'Enter only numbers!!!';
    }
}

/* Event Listeners */
swapToCelsius.addEventListener('click', swapToCelsiusFunc);
swapToFahrenheit.addEventListener('click', swapToFahrenheitFunc);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);
