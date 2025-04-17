const bookElement = document.getElementById("book");
const bookFontControlElement = document.querySelector(".book__control_font-size");
bookFontControlElement.addEventListener("click", function(e) {
  e.preventDefault();
  if (!e.target.classList.contains("font-size_active")) {
    e.target.classList.add("font-size_active");
    bookElement.className = e.target.dataset.size ? `book book_fs-${e.target.dataset.size}` : `book`;
    Array.from(e.currentTarget.children).forEach(item => {
      if (item !== e.target) {
        item.classList.remove("font-size_active");
      }
    });
  }
});