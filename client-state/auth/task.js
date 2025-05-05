const formWrapper = document.getElementById("signin");
const form = document.getElementById("signin__form");
const userIdElement = document.getElementById("user_id");
const welcome = document.getElementById("welcome");
const signoutButton = document.querySelector(".signout-button");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const targetForm = e.currentTarget;
  const xhr = createAsyncRequest("POST", targetForm.action, targetForm);
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE && this.status === 201) {
      const response = JSON.parse(this.responseText);
      if (response.success) {
        showWelcome(response.user_id);
        window.localStorage.setItem("user_id", response.user_id);
      } else {
        alert("Неверный логин/пароль");
      }
    }

    targetForm.reset();
  });
});
signoutButton.addEventListener("click", signout);
document.addEventListener("DOMContentLoaded", signinFromStorage);

function createAsyncRequest(method, url, formElement) {
  const formObject = new FormData(formElement);
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send(formObject);
  return xhr;
}

function signinFromStorage() {
  const userData = window.localStorage.getItem("user_id");
  if (userData) {
    showWelcome(userData);
  }
}

function showWelcome(userId) {
  formWrapper.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userIdElement.textContent = userId;
}

function signout() {
  formWrapper.classList.add("signin_active");
  welcome.classList.remove("welcome_active");
  userIdElement.textContent = "";
  window.localStorage.removeItem("user_id");
  alert("Вы вышли из своей учётной записи.");
}