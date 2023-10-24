import "./styles/index.scss";
import header from "./components/header/header";
import main from "./components/main/main";
import footer from "./components/footer/footer";
async function loadComponents() {
  document.querySelector("#app").innerHTML = `
    <div id="${header.componentId}"></div>
    <div id="${main.componentId}"></div>
    <div id="${footer.componentId}"></div>
  `;
  header.loadComponent();
  main.loadComponent();
  footer.loadComponent();
}

loadComponents();
