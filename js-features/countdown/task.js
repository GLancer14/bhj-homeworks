const currentTimerElement = document.getElementById("timer");
const timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
let currentTimerValue = new Date(2025, 0, 1, ...currentTimerElement.textContent.split(":"));
const intervalId = setInterval(() => {
  currentTimerValue = new Date(currentTimerValue.setSeconds(currentTimerValue.getSeconds() - 1));
  currentTimerElement.textContent = Intl.DateTimeFormat("ru", timeOptions).format(currentTimerValue);
  if (currentTimerValue.getSeconds() === 0 && currentTimerValue.getMinutes() === 0 && currentTimerValue.getHours() === 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
    document.getElementById("file-download").click();
  }
}, 1000);