const taskForm = document.getElementById("tasks__form");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
document.addEventListener("DOMContentLoaded", () => {
  const tasksArray = JSON.parse(window.localStorage.getItem("tasks"));
  taskList.innerHTML = tasksArray.reduce((acc, item) => {
    return acc += `
      <div class="task">
        <div class="task__title">${item}</div>
        <a class="task__remove" href="#">&times;</a>
      </div>
    `;
  }, "");
  const taskRemoveButtons = document.querySelectorAll(".task__remove");
  taskRemoveButtons.forEach(item => item.addEventListener("click", dropTask));
});
taskForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  if (taskInput.value.trim()) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
      <div class="task__title">${taskInput.value}</div>
      <a class="task__remove" href="#">&times;</a>
    `;
    taskList.appendChild(taskElement);
    taskElement.querySelector(".task__remove").addEventListener("click", dropTask);
    setTasksStorage();
  }

  e.currentTarget.reset();
}

function dropTask(e) {
  e.preventDefault();
  e.currentTarget.closest(".task").remove();
  setTasksStorage();
}

function setTasksStorage() {
  const taskTitles = JSON.stringify(Array.from(document.querySelectorAll(".task__title")).map(item => item.textContent));
  window.localStorage.setItem("tasks", taskTitles);
}