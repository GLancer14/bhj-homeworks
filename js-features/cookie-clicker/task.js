const cookieElement = document.getElementById("cookie");
const cookieInitialWidth = cookieElement.width;
const clickerCounterElement = document.getElementById("clicker__counter");
let clickerCounterCurrentValue = Number(clickerCounterElement.textContent);
cookieElement.onclick = function() {
  cookieElement.width = cookieElement.width != cookieInitialWidth ? cookieInitialWidth : 230;
  clickerCounterCurrentValue++;
  clickerCounterElement.textContent = clickerCounterCurrentValue;
}