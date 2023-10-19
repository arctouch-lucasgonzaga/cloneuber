import "./button-language-mobile.scss"
import headerHTML from "./button-language-mobile.html?raw"

export const componentId ="buttonLanguageMobile"
export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = headerHTML;
    document.querySelector(`#button-language-mobile`).addEventListener("click", () => {
      document.getElementById("links-button").style.display = "none";
      document.getElementById("button-products").style.display ="none";
      document.getElementById("button-language-mobile").style.display ="none"
      document.getElementById("fullscreen-language-mobile").classList.toggle("show-content-mobile");
    });
}

export default{
    componentId,
    loadComponent,
}