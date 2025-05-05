const formWrapper = document.getElementById("signin");
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const signoutButton = document.querySelector(".signout-button");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formObject = new FormData(e.currentTarget);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
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

    form.reset();
  });
  xhr.send(formObject);
});

signoutButton.addEventListener("click", signout);
document.addEventListener("DOMContentLoaded", signinFromStorage);

function signinFromStorage() {
  const userData = window.localStorage.getItem("user_id");
  if (userData) {
    showWelcome(userData);
  }
}

function showWelcome(userId) {
  formWrapper.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  document.getElementById("user_id").textContent = userId;
}

function signout() {
  formWrapper.classList.add("signin_active");
  welcome.classList.remove("welcome_active");
  document.getElementById("user_id").textContent = "";
  window.localStorage.removeItem("user_id");
  alert("Вы вышли из своей учётной записи.");
}