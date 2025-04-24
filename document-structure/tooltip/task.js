const anchors = document.querySelectorAll(".has-tooltip");
const positions = ["top", "right", "bottom", "left"];
anchors.forEach((item, index) => {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = item.getAttribute("title");
  tooltip.setAttribute("data-position", positions[index % positions.length])
  item.insertAdjacentElement("afterbegin", tooltip);
  item.addEventListener("click", function (e) {
    e.preventDefault();
    tooltip.classList.toggle("tooltip_active");
    switch (tooltip.dataset.position) {
      case "top":
        [tooltip.style.left, tooltip.style.bottom] = [0, `${item.offsetHeight}px`];
        break;
      case "left":
        [tooltip.style.right, tooltip.style.top] = [`${item.offsetWidth}px`, 0];
        break;
      case "right":
        [tooltip.style.left, tooltip.style.top] = [`${item.offsetWidth}px`, 0];
        break;
      case "bottom":
        [tooltip.style.left, tooltip.style.top] = [0, `${item.offsetHeight}px`];
        break;
      default:
        [tooltip.style.left, tooltip.style.top] = [0, `${item.offsetHeight}px`];
    }

    document.querySelectorAll(".tooltip").forEach(tooltipElement => {
      if (tooltipElement !== tooltip) {
        tooltipElement.classList.remove("tooltip_active");
      }
    });
  });
});