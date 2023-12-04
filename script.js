const hourInput = document.getElementById('hour-input');
const minuteInput = document.getElementById('minute-input');

function incrementHour() {
let currentHour = parseInt(hourInput.value);
currentHour = (currentHour % 12) + 1; // Loop between 1 and 12
updateHour(currentHour);
}

function decrementHour() {
let currentHour = parseInt(hourInput.value);
currentHour = (currentHour - 2 + 12) % 12 + 1; // Loop between 1 and 12
updateHour(currentHour);
}

function updateHour(hour) {
hourInput.value = hour.toString().padStart(2, '0');
}

function incrementMinute() {
    let currentMinute = parseInt(minuteInput.value);
    currentMinute = (currentMinute + 15) % 60; // Loop between 0 and 59
    updateMinute(currentMinute);
  }

  function decrementMinute() {
    let currentMinute = parseInt(minuteInput.value);
    currentMinute = (currentMinute - 15 + 60) % 60; // Loop between 0 and 59
    updateMinute(currentMinute);
  }

  function updateMinute(minute) {
    minuteInput.value = minute.toString().padStart(2, '0');
    console.log(`Minute set to: ${minuteInput.value}`);
    // You can use the 'minute' variable for further processing
  }

const ampmToggle = document.getElementById('ampm-toggle');
let isAM = true;

function toggleAMPM() {
isAM = !isAM;
ampmToggle.textContent = isAM ? 'AM' : 'PM';
console.log(`AM/PM set to: ${isAM ? 'AM' : 'PM'}`);
// You can use the 'isAM' variable for further processing
}