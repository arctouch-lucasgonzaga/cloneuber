import "./header.css";
import headerHTML from "./header.html?raw";

export const componentId = "header";

export function loadComponent() {
  document.querySelector(`#${componentId}`).innerHTML = headerHTML;
}

export default {
  componentId,
  loadComponent,
};
