const cookieElement = document.getElementById("cookie");
const cookieInitialWidth = cookieElement.width;
const clickerCounterElement = document.getElementById("clicker__counter");
const clickerAverageElement = document.getElementById("clicker__avg");
let clickerCounterCurrentValue = Number(clickerCounterElement.textContent);
cookieElement.onclick = (function() {
  let previousClickTime = Date.now();
  return function() {
    cookieElement.width = cookieElement.width != cookieInitialWidth ? cookieInitialWidth : 230;
    clickerCounterCurrentValue++;
    clickerCounterElement.textContent = clickerCounterCurrentValue;
    const currentClickTime = Date.now();
    clickerAverageElement.textContent = (1 / ((currentClickTime - previousClickTime) / 1000)).toFixed(2);
    previousClickTime = currentClickTime;
  }
})();