const editor = document.getElementById("editor");
editor.addEventListener("input", function (e) {
  window.localStorage.setItem("editorContent", e.currentTarget.value);
});
document.addEventListener("DOMContentLoaded", function () {
  editor.value = window.localStorage.getItem("editorContent");
});