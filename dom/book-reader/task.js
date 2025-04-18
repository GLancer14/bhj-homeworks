const bookElement = document.getElementById("book");
const bookFontControlElement = document.querySelector(".book__control_font-size");
const bookColorControlElement = document.querySelector(".book__control_color");
const bookBgColorControlElement = document.querySelector(".book__control_background");
bookFontControlElement.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("font-size_active") && e.target.tagName === "A") {
    e.target.classList.add("font-size_active");
    Array.from(e.currentTarget.children).forEach(item => {
      if (item !== e.target) {
        item.classList.remove("font-size_active");
      }
    });

    bookElement.classList.forEach(item => {
      if (item.includes("fs")) {
        bookElement.classList.remove(item);
      }
    });
    if (e.target.dataset.size) {
      bookElement.classList.add(`book_fs-${e.target.dataset.size}`);
    }
  }
});

bookColorControlElement.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("color_active") && e.target.tagName === "A") {
    e.target.classList.add("color_active");
    Array.from(e.currentTarget.children).forEach(item => {
      if (item !== e.target) {
        item.classList.remove("color_active");
      }
    });

    bookElement.classList.forEach(item => {
      if (item.includes("color")) {
        bookElement.classList.remove(item);
      }
    });
    bookElement.classList.add(`book_color-${e.target.dataset.textColor}`);
  }
});

bookBgColorControlElement.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("color_active") && e.target.tagName === "A") {
    e.target.classList.add("color_active");
    Array.from(e.currentTarget.children).forEach(item => {
      if (item !== e.target) {
        item.classList.remove("color_active");
      }
    });

    bookElement.classList.forEach(item => {
      if (item.includes("bg")) {
        bookElement.classList.remove(item);
      }
    });
    bookElement.classList.add(`book_bg-${e.target.dataset.bgColor}`);
  }
});