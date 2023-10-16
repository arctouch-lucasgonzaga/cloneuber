import "./button-language-mobile.scss"
import headerHTML from "./button-language-mobile.html?raw"

export const componentId ="buttonLanguageMobile"
export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = headerHTML;
    document.querySelector(`#button-language`).addEventListener("click", () => {
      document.getElementById("fullscreen-language").classList.toggle("show-content");
    document.querySelector(`.buttons-language-selection`).classList.toggle("button-selection-display") 
    });
}

export default{
    componentId,
    loadComponent,
}