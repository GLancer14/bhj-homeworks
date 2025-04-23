const taskForm = document.getElementById("tasks__form");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    submitForm(e);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  taskList.innerHTML = window.localStorage.getItem("tasks");
  const taskRemoveButtons = document.querySelectorAll(".task__remove");
  taskRemoveButtons.forEach(item => item.addEventListener("click", dropTask));
});
taskForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  if (taskInput.value) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskList.appendChild(taskElement);

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task__title");
    taskTitle.textContent = taskInput.value;
    taskElement.appendChild(taskTitle);

    const dropTaskElement = document.createElement("a");
    dropTaskElement.classList.add("task__remove");
    dropTaskElement.setAttribute("href", "#");
    dropTaskElement.innerHTML = "&times;";
    taskElement.appendChild(dropTaskElement);
    dropTaskElement.addEventListener("click", dropTask);

    setTasksStorage();
  }
}

function dropTask(e) {
  e.preventDefault();
  e.currentTarget.closest(".task").remove();
  setTasksStorage();
}

function setTasksStorage() {
  window.localStorage.setItem("tasks", taskList.innerHTML);
}