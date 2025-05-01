const form = document.getElementById("form");
const progressBar = document.getElementById("progress");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.upload.addEventListener("progress", e => progressBar.value = (e.loaded / e.total).toFixed("1"));
  xhr.send(formData);
});