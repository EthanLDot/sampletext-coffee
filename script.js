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

checkTime();
}

function checkTime(){
  const h = document.getElementById("hour-input").value[0] == '0' ? document.getElementById("hour-input").value[1] : document.getElementById("hour-input").value;
  const ampm = document.getElementById("ampm-toggle").innerText;
  const step2Text = document.getElementById("time-picker").childNodes[3];
  const confirmBtn = document.getElementById("confirm-btn");
  if((ampm == 'AM' && (h < 6 || h == 12)) || (ampm == "PM" && h > 8 && h != 12))
  {
    step2Text.textContent = "You cannot pick up items at this time.";
    step2Text.style.color = 'red';
    confirmBtn.disabled = true;
    confirmBtn.style.backgroundColor = "gray";
  }
  else
  {
    step2Text.textContent = "To pick up multiple times per day, create a new subscription.";
    step2Text.style.color = 'black';
    confirmBtn.disabled = false;
    confirmBtn.style.backgroundColor = "#641649";
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
let isAM = false;

function toggleAMPM() {
  isAM = !isAM;
  ampmToggle.textContent = isAM ? 'AM' : 'PM';
  console.log(`AM/PM set to: ${isAM ? 'AM' : 'PM'}`);
  checkTime();
}

function setTimes(){

  const hour = document.getElementById("hour-input").value[0] == '0' ? document.getElementById("hour-input").value[1] : document.getElementById("hour-input").value;
  const minute = document.getElementById("minute-input").value;
  const ampm = document.getElementById("ampm-toggle").innerText[0];
  const time = hour + ":" + minute + ampm;
  let dates = "";
  const checkboxes = document.querySelectorAll('.dowPickerOption input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked && checkbox.parentElement.getAttribute('data-toggled') != "true") {
      checkbox.nextElementSibling.innerHTML = "<p>"+checkbox.id+"</p><p>"+time+"</p><button onclick='removeDay(this)'>X</button>";
      dates = dates + checkbox.id.toUpperCase() + ",";
      checkbox.parentElement.setAttribute('data-toggled', 'true');
    }
  });
  const alertMsg = "TIMES ADDED: " + hour + ":" + minute + ampm + " " + dates;
  sendAlert(alertMsg.substring(0, alertMsg.length - 1));
}

function removeDay(el){
  const dayElement = el.parentElement.parentElement;
  const day = el.parentElement.innerText.substring(0, 3);
  dayElement.setAttribute('data-toggled', 'false');
  dayElement.innerHTML = "<input type='checkbox' id='" + day + "'><label for='"+  day + "'>" + day + "</label>";
  sendAlert("removed times for " + day);

}

function sendAlert(s) {
  const frame = document.getElementById("iphone-frame");
  const notification = document.createElement('div');
  notification.id = 'notif';
  notification.textContent = s;
  frame.appendChild(notification);
}