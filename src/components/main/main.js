import "./main.scss";
import mainHTML from "./main.html?raw";

export const componentId = "main";

export function loadComponent() {
  document.querySelector(`#${componentId}`).innerHTML = mainHTML;
}

export default {
  componentId,
  loadComponent,
};
