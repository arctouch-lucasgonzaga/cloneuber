import "./dropdown-company.scss";
import headerHTML from "./dropdown-company.html?raw";

export const componentId = "dropdown-company";
export function loadComponent() {
    document.querySelector(`#${componentId}`).innerHTML = headerHTML;
    document.querySelector(`.button-company`).addEventListener("click", () => {
      document.getElementById("company-content-dropdown").classList.toggle("show");
    // let botaoCompany = document.querySelector(`.button-company`)
    // botaoCompany.addEventListener("mouseover", ()=>{
    //     botaoCompany.classList.toggle("hover-button")
    // })
    });
  }

export default {
    componentId,
    loadComponent,
}