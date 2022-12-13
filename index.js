/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthParagraph = document.getElementById("length-paragraph");
const volumeParagraph = document.getElementById("volume-paragraph");
const massParagraph = document.getElementById("mass-paragraph");

convertBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;

  //20 meters = 65.616 feet | 20 feet = 6.096 meters
  lengthParagraph.textContent = `${inputValue} meters = ${meterToFeet(
    inputValue
  )} feet | ${inputValue} feet = ${feetToMeter(inputValue)} meters`;

  //20 liters = 5.284 gallons | 20 gallons = 75.708 liters
  volumeParagraph.textContent = `${inputValue} liters = ${literToGallon(
    inputValue
  )} gallons | ${inputValue} gallons = ${gallonToLiter(inputValue)} liters`;

  //20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
  massParagraph.textContent = `${inputValue} kilos = ${kilogramToPound(
    inputValue
  )} pounds | ${inputValue} pounds = ${poundToKilogram(inputValue)} kilos`;
});

function clear() {
  inputEl.value = "";
}

function meterToFeet(meter) {
  return (meter * 3.281).toFixed(3);
}

function literToGallon(liter) {
  return (liter * 0.264).toFixed(3);
}

function kilogramToPound(kilogram) {
  return (kilogram * 2.204).toFixed(3);
}

function feetToMeter(feet) {
  return (feet / 3.281).toFixed(3);
}

function gallonToLiter(gallon) {
  return (gallon / 0.264).toFixed(3);
}

function poundToKilogram(pound) {
  return (pound / 2.204).toFixed(3);
}
