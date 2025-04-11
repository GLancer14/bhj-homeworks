const tabs = document.querySelectorAll(".tab");
const tabContentElements = document.querySelectorAll(".tab__content");
tabs.forEach((item, index, array) => {
  item.addEventListener("click", (e) => {
    e.currentTarget.classList.add("tab_active");
    tabContentElements[index].classList.add("tab__content_active");
    array.forEach((innerItem, innerIndex) => {
      if (index !== innerIndex) {
        innerItem.classList.remove("tab_active");
        tabContentElements[innerIndex].classList.remove("tab__content_active");
      }
    });
  });
});