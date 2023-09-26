import "./button-language.scss";
import headerHTML from "./button-language.html?raw"

export const componentId = "button-language";
export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = headerHTML;
    document.querySelector(`#button-languageid`).addEventListener("click", () => {
        document.getElementById("fullscreen-language").classList.toggle("show-content");
        console.log("evento")
    })
    
}

export default {
    componentId,
    loadComponent,
}