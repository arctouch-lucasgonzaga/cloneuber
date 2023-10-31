import "./main.scss";
import mainHTML from "./main.html?raw";

export const componentId = "main";

export function loadComponent() {
  document.querySelector(`#${componentId}`).innerHTML = mainHTML;
  let firstInput = document.getElementById("first-input");
  let secondInput = document.getElementById("second-input");
  firstInput.addEventListener("click", () => {
    firstInput.classList.add("style-click")
  })
  firstInput.addEventListener("focusout", () => {
    firstInput.classList.remove("style-click");
  });
  secondInput.addEventListener("click", () => {
    secondInput.classList.add("style-click")
  })
  secondInput.addEventListener("focusout", () => {
    secondInput.classList.remove("style-click");
  });
}

export default {
  componentId,
  loadComponent,
};
