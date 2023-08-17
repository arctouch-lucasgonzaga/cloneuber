import "./styles.css";
import headerHTML from "./index.html?raw";

export const componentId = "header";

export function loadComponent() {
  document.querySelector(`#${componentId}`).innerHTML = headerHTML;
}

export default {
  componentId,
  loadComponent,
};
