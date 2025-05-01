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
  let pollAnswersButtons = "";
  pollTitle.textContent = pollData.data.title;
  for (const pollAnswer of pollData.data.answers) {
    pollAnswersButtons += `<button class="poll__answer">${pollAnswer}</button>`;
  }

  pollAnswers.innerHTML = pollAnswersButtons;
  pollAnswers.addEventListener("click", e => {
    if (e.target.classList.contains("poll__answer")) {
      alert("Спасибо, ваш голос засчитан!");
    }
  });
}