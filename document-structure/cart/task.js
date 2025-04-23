const decProductElements = document.querySelectorAll(".product__quantity-control_dec");
const incProductElements = document.querySelectorAll(".product__quantity-control_inc");
const toCartElements = document.querySelectorAll(".product__add");
const cartProductsWrapperElement = document.querySelector(".cart__products");
decProductElements.forEach(item => {
  item.addEventListener("click", function (e) {
    if (+e.currentTarget.nextElementSibling.textContent > 1) {
      e.currentTarget.nextElementSibling.textContent = +e.currentTarget.nextElementSibling.textContent - 1;
    }
  });
});
incProductElements.forEach(item => {
  item.addEventListener("click", function (e) {
    e.currentTarget.previousElementSibling.textContent = +e.currentTarget.previousElementSibling.textContent + 1;
  });
});
toCartElements.forEach(toCartButton => {
  const productElement = toCartButton.closest(".product");
  toCartButton.addEventListener("click", function () {
    const cartProductsElements = Array.from(document.querySelectorAll(".cart__product"));
    const cartProductElement = cartProductsElements.find(cartProduct => cartProduct.dataset.id === productElement.dataset.id);
    if (cartProductElement) {
      const cartProductCountElement = cartProductElement.querySelector(".cart__product-count");
      cartProductCountElement.textContent = Number(cartProductCountElement.textContent) + Number(productElement.querySelector(".product__quantity-value").textContent);
    } else {
      const newCartProductElement = document.createElement("div");
      newCartProductElement.classList.add("cart__product");
      newCartProductElement.setAttribute("data-id", productElement.dataset.id);
      cartProductsWrapperElement.appendChild(newCartProductElement);
      newCartProductElement.innerHTML = `
        <img class="cart__product-image" src="${productElement.querySelector(".product__image").src}">
        <div class="cart__product-count">${productElement.querySelector(".product__quantity-value").textContent}</div>
      `;
    }
  });
});