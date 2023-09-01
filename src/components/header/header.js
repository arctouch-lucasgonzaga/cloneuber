import "./header.scss";
import headerHTML from "./header.html?raw";

export const componentId = "header";

export function loadComponent() {
  document.querySelector(`#${componentId}`).innerHTML = headerHTML;
}

export function dropdownProducts() {
  function myFunction() {
    document.getElementById("productsDropContent").classList.toggle("show");
  }
  myFunction()
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    const myDropdown = document.getElementById("productsDropContent");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
}
export default {
  componentId,
  loadComponent,
  dropdownProducts,
};
