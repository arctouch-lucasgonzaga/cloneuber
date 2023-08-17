import "./styles/index.css";
import { components } from "./components";

async function loadComponents() {
  Object.entries(components).forEach(([prop, val]) => {
    document.querySelector("#app").innerHTML =
      document.querySelector("#app").innerHTML +
      `
      <div id="${prop}"></div>
      `;
    val();
  });
}

loadComponents();
