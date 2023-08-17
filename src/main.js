import "./styles/index.css";
import header from "./components/header/header";
import main from "./components/main/main";

async function loadComponents() {
  document.querySelector("#app").innerHTML = `
    <div id="${header.componentId}"></div>
    <div id="${main.componentId}"></div>
  `;
  header.loadComponent();
  main.loadComponent();
}

loadComponents();
