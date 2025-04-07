const deadElement = document.getElementById("dead");
const lostElement = document.getElementById("lost");
const getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i < 10; i++) {
  const holeElement = getHole(i);
  holeElement.onclick = function () {
    if (holeElement.className.includes("hole_has-mole")) {
      deadElement.textContent = Number(deadElement.textContent) + 1;
    } else {
      lostElement.textContent = Number(lostElement.textContent) + 1;
    }

    if (Number(deadElement.textContent) === 10) {
      runEndgameActions("Вы победили!");
    } else if (Number(lostElement.textContent) === 5) {
      runEndgameActions("Вы проиграли! Попробуйте снова.");
    }
  };
}

function runEndgameActions(message) {
  alert(message);
  deadElement.textContent = 0;
  lostElement.textContent = 0;
}