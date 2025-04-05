const currentTimerElement = document.getElementById("timer");
let currentTimerValue = Number(currentTimerElement.textContent);

let intervalId = setInterval(() => {
  currentTimerElement.textContent = --currentTimerValue;
  if (currentTimerValue === 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
}, 1000);