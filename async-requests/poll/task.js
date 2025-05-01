const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE && this.status === 200) {
    const pollData = JSON.parse(this.responseText);
    createPollElements(pollData);
  }
});
xhr.send();

function createPollElements(pollData) {
  const pollTitle = document.getElementById("poll__title");
  const pollAnswers = document.getElementById("poll__answers");
  pollAnswers.innerHTML = pollData.data.answers.reduce((acc, item) => {
    return acc += `<button class="poll__answer">${item}</button>`
  }, "");
  pollTitle.textContent = pollData.data.title;
  pollAnswers.addEventListener("click", e => {
    if (e.target.classList.contains("poll__answer")) {
      alert("Спасибо, ваш голос засчитан!");
      getPollResult(pollData.id, [...e.target.parentElement.children].indexOf(e.target));
    }
  });
}

function getPollResult(pollId, answerId) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE && this.status === 201) {
      const pollResult = JSON.parse(this.responseText).stat;
      createPollResultElements(pollResult);
    }
  });
  xhr.send(`vote=${pollId}&answer=${answerId}`);
}

function createPollResultElements(pollResultData) {
  const pollAnswers = document.getElementById("poll__answers");
  let votesSum = pollResultData.reduce((acc, item) => acc += item.votes, 0);
  pollAnswers.innerHTML = pollResultData.reduce((acc, item) => {
    return acc += `<div class="poll__answer-stat">${item.answer}: <b>${(item.votes / votesSum * 100).toFixed(2)}%</b></div>`
  }, "");
}