import "./dropdown-product.scss";
import headerHTML from "./dropdown-product.html?raw";

export const componentId = "dropdown-product";

export function loadComponent() {
  document.querySelector(`#${componentId}`).innerHTML = headerHTML;
  document.querySelector(`.menu-products`).addEventListener("click", () => {
    document.getElementById("productsDropContent").classList.toggle("show");
  });
}

export default {
  componentId,
  loadComponent,
};
