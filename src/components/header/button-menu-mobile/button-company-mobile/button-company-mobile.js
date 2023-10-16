import "./button-company-mobile.scss";
import headerHTML from "./button-company-mobile.html?raw";

export const componentId = "button-company-mobile"
export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = headerHTML;
    document.querySelector(`#content-company`).addEventListener("click", () =>{
        document.querySelector(`.lista-drop`).classList.toggle("show")
        document.querySelector(`#button-company-mobile`).classList.toggle("margin-force")
    })


}   

export default{
    componentId,
    loadComponent,
}