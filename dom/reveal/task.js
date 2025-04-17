const revealElements = document.querySelectorAll(".reveal");
document.addEventListener("scroll", function() {
  revealElements.forEach(item => {
    const itemRect = item.getBoundingClientRect();
    if (itemRect.top + itemRect.height > 0 && itemRect.bottom < window.innerHeight + itemRect.height) {
      item.classList.add("reveal_active");
    } else {
      item.classList.remove("reveal_active");
    }
  });
});