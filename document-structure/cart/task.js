const decProductElements = document.querySelectorAll(".product__quantity-control_dec");
const incProductElements = document.querySelectorAll(".product__quantity-control_inc");
const toCartElements = document.querySelectorAll(".product__add");
const cartProductsWrapperElement = document.querySelector(".cart__products");
document.addEventListener("DOMContentLoaded", () => {
  const cartStorage = window.localStorage.getItem("cart__products");
  if (cartStorage) {
    const cartProductsArray = JSON.parse(cartStorage);
    cartProductsWrapperElement.innerHTML = cartProductsArray.reduce((acc, item) => {
      return acc += `
        <div class="cart__product" data-id="${item.id}">
          <img class="cart__product-image" src="${item.imageSrc}">
          <div class="cart__product-count">${item.count}</div>
          <div class="cart__delete">&times;</div>
        </div>
      `;
    }, "");
    const cartProductDeleteButtons = cartProductsWrapperElement.querySelectorAll(".cart__delete");
    cartProductDeleteButtons.forEach(item => item.addEventListener("click", deleteCartProduct));
    changeCartVisibility();
  }
});
decProductElements.forEach(item => {
  item.addEventListener("click", function (e) {
    const decProductElement = e.currentTarget.nextElementSibling;
    if (+decProductElement.textContent > 1) {
      decProductElement.textContent = +decProductElement.textContent - 1;
    }
  });
});
incProductElements.forEach(item => {
  item.addEventListener("click", function (e) {
    const incProductElement = e.currentTarget.previousElementSibling;
    incProductElement.textContent = +incProductElement.textContent + 1;
  });
});
toCartElements.forEach(toCartButton => {
  const productElement = toCartButton.closest(".product");
  toCartButton.addEventListener("click", function () {
    const cartProductsElements = Array.from(document.querySelectorAll(".cart__product"));
    let cartProductElement = cartProductsElements.find(cartProduct => cartProduct.dataset.id === productElement.dataset.id);
    if (cartProductElement) {
      const cartProductCountElement = cartProductElement.querySelector(".cart__product-count");
      cartProductCountElement.textContent = Number(cartProductCountElement.textContent) + Number(productElement.querySelector(".product__quantity-value").textContent);
    } else {
      cartProductElement = document.createElement("div");
      cartProductElement.classList.add("cart__product");
      cartProductElement.setAttribute("data-id", productElement.dataset.id);
      cartProductsWrapperElement.appendChild(cartProductElement);
      cartProductElement.innerHTML = `
        <img class="cart__product-image" src="${productElement.querySelector(".product__image").src}">
        <div class="cart__product-count">${productElement.querySelector(".product__quantity-value").textContent}</div>
        <div class="cart__delete">&times;</div>
      `;

      const cartDeleteButton = cartProductElement.querySelector(".cart__delete")
      cartDeleteButton.addEventListener("click", deleteCartProduct);

      changeCartVisibility();
    }

    const productImageCopy = createProductImageCopy(productElement);
    [productImageCopy.style.left, productImageCopy.style.top] = [`${cartProductElement.offsetLeft}px`, `${cartProductElement.offsetTop - productImageCopy.parentElement.offsetTop}px`];
    productImageCopy.addEventListener("transitionend", e => e.currentTarget.remove());

    setCartStorage();
  });
});

function deleteCartProduct(e) {
  e.currentTarget.closest(".cart__product").remove();
  setCartStorage();
  changeCartVisibility();
}

function changeCartVisibility() {
  const cart = document.querySelector(".cart");
  cartProductsWrapperElement.children.length > 0 ? cart.classList.remove("cart__hide") : cart.classList.add("cart__hide");
}

function createProductImageCopy(productElement) {
  const productImage = productElement.querySelector(".product__image");
  const productImageCopy = productImage.cloneNode(true);
  productImageCopy.classList.add("product__image-cloned");
  productImageCopy.style.top = productImage.offsetTop + "px";
  productImageCopy.style.left = 0;
  productElement.appendChild(productImageCopy);
  return productImageCopy;
}

function setCartStorage() {
  const cartProductsArray = Array.from(document.querySelectorAll(".cart__product")).map(item => {
    return {
      id: item.dataset.id,
      imageSrc: item.querySelector(".cart__product-image").src,
      count: item.querySelector(".cart__product-count").textContent,
    };
  });
  window.localStorage.setItem("cart__products", JSON.stringify(cartProductsArray));
}