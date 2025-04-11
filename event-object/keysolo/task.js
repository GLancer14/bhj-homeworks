const container = document.getElementById("game");
const winsElement = container.querySelector(".status__wins");
const lossElement = container.querySelector(".status__loss");
const timerElement = container.querySelector(".status__timer");
const wordElement = container.querySelector(".word");
let currentSymbol = null;
let timerIntervalId = 0;
const words = [
  "bob",
  "awesome",
  "netology",
  "hello",
  "kitty",
  "java",
  "я люблю kitkat",
  "cat кот",
  "hot дог",
  "победа",
  "поражение",
];
function renderWord() {
  const word = words[Math.floor((Math.random() * words.length))];
  wordElement.innerHTML = [...word].map((item, index) => `<span class="symbol ${index === 0 ? "symbol__current" : ""}">${item}</span>`).join("");
  currentSymbol = wordElement.children[0];
  setTimer(word);
}

function registerEvents() {
  document.addEventListener("keypress", (e) => {
    if (currentSymbol.textContent.toLowerCase() === e.key.toLowerCase()) {
      success();
    } else {
      fail();
    }
  });
}

function reset() {
  renderWord();
  winsElement.textContent = 0;
  lossElement.textContent = 0;
}

function success() {
  currentSymbol.classList.add("symbol_correct");
  currentSymbol = currentSymbol.nextElementSibling;
  if (!currentSymbol) {
    winsElement.textContent = +winsElement.textContent + 1;
    renderWord();
  }

  if (+winsElement.textContent === 10) {
    alert("Вы победили!");
    reset();
  }
}

function fail() {
  lossElement.textContent = +lossElement.textContent + 1;
  if (+lossElement.textContent === 5) {
    alert("Вы проиграли!");
    reset();
    return;
  }

  renderWord();
}

function setTimer(word) {
  clearInterval(timerIntervalId);
  let initialTime = word.length;
  timerElement.textContent = initialTime;
  timerIntervalId = setInterval(() => {
    initialTime--;
    timerElement.textContent = initialTime;
    if (initialTime === 0) {
      clearInterval(timerIntervalId);
      fail();
    }
  }, 1000);
}

reset();
registerEvents();