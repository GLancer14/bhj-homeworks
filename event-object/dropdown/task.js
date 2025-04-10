const dropdownValueElements = Array.from(document.querySelectorAll(".dropdown__value"));
for (const dropdownValueElement of dropdownValueElements) {
  const dropdownList = dropdownValueElement.nextElementSibling;
  dropdownValueElement.addEventListener("click", function () {
    dropdownList.classList.toggle("dropdown__list_active");
  });
  dropdownList.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.remove("dropdown__list_active");
    dropdownValueElement.textContent = e.target.textContent;
  });
}