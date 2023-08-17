import "./styles.css";
import mainHTML from "./index.html?raw";

export const componentId = "main";

export function loadComponent() {
  document.querySelector(`#${componentId}`).innerHTML = mainHTML;
}

export default {
  componentId,
  loadComponent,
};
