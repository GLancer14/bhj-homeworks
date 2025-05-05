const modalCloseButton = document.querySelector(".modal__close");
const subscribeModal = document.getElementById("subscribe-modal");
modalCloseButton.addEventListener("click", function () {
  document.cookie = "modal=closed";
  subscribeModal.classList.remove("modal_active");
});
document.addEventListener("DOMContentLoaded", function () {
  document.cookie.includes("modal=closed") ? subscribeModal.classList.remove("modal_active") : subscribeModal.classList.add("modal_active");
});