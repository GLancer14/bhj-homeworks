const anchors = document.querySelectorAll(".has-tooltip");
const positions = ["top", "right", "bottom", "left"];
anchors.forEach((item, index) => {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = item.getAttribute("title");
  tooltip.setAttribute("data-position", positions[index % positions.length])
  item.insertAdjacentElement("afterend", tooltip);
  item.addEventListener("click", function (e) {
    e.preventDefault();
    tooltip.classList.toggle("tooltip_active");
    switch (tooltip.dataset.position) {
      case "top":
        [tooltip.style.left, tooltip.style.top] = [`${item.offsetLeft}px`, `${item.offsetTop - tooltip.offsetHeight}px`];
        break;
      case "left":
        [tooltip.style.left, tooltip.style.top] = [`${item.offsetLeft - tooltip.offsetWidth}px`, `${item.offsetTop}px`];
        break;
      case "right":
        [tooltip.style.left, tooltip.style.top] = [`${item.offsetLeft + item.offsetWidth}px`, `${item.offsetTop}px`];
        break;
      case "bottom":
        [tooltip.style.left, tooltip.style.top] = [`${item.offsetLeft}px`, `${item.offsetTop + item.offsetHeight}px`];
        break;
      default:
        [tooltip.style.left, tooltip.style.top] = [`${item.offsetLeft}px`, `${item.offsetTop + item.offsetHeight}px`];
    }

    document.querySelectorAll(".tooltip").forEach(tooltipElement => {
      if (tooltipElement !== tooltip) {
        tooltipElement.classList.remove("tooltip_active");
      }
    });
  });
});