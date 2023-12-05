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

const h = document.getElementById("hour-input").value[0] == '0' ? document.getElementById("hour-input").value[1] : document.getElementById("hour-input").value;
const ampm = document.getElementById("ampm-toggle").innerText;
if((ampm == 'AM' && h < 6) || (ampm == "PM" && h > 9))
{
  // DO SOMETHING
}
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

function setTimes(){

  const hour = document.getElementById("hour-input").value[0] == '0' ? document.getElementById("hour-input").value[1] : document.getElementById("hour-input").value;
  const minute = document.getElementById("minute-input").value;
  const ampm = document.getElementById("ampm-toggle").innerText[0];
  const time = hour + ":" + minute + ampm;
  const checkboxes = document.querySelectorAll('.dowPickerOption input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked && checkbox.parentElement.getAttribute('data-toggled') != "true") {
      checkbox.nextElementSibling.innerHTML = "<p>"+checkbox.id+"</p><p>"+time+"</p><button onclick='removeDay(this)'>X</button>";
      checkbox.parentElement.setAttribute('data-toggled', 'true');
    }
  });
}

function removeDay(el){
  const dayElement = el.parentElement.parentElement;
  const day = el.parentElement.innerText.substring(0, 3);
  dayElement.setAttribute('data-toggled', 'false');
  dayElement.innerHTML = "<input type='checkbox' id='" + day + "'><label for='"+  day + "'>" + day + "</label>";

}