const currentTimerElement = document.getElementById("timer");
const timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
let currentTimerValue = new Date(2025, 0, 1, 0, 0, 15);
setTime();
let intervalId = setInterval(setTime, 1000);
function setTime() {
  currentTimerValue = new Date(currentTimerValue.setSeconds(currentTimerValue.getSeconds() - 1));
  currentTimerElement.textContent = Intl.DateTimeFormat("ru", timeOptions).format(currentTimerValue);
  if (currentTimerValue.getSeconds() === 0 && currentTimerValue.getMinutes() === 0 && currentTimerValue.getHours() === 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
    document.getElementById("file-download").click();
  }
}