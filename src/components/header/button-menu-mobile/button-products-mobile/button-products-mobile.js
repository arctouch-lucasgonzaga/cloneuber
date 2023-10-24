import "./button-products-mobile.scss"
import headerHTML from "./button-products-mobile.html?raw"

export const componentId = "buttonProductsMobile"
export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = headerHTML;
    document.querySelector(`#button-products`).addEventListener("click", () => {
        document.getElementById("content-menu-products").style.display = "flex";
        document.getElementById("links-button").style.display = "none";
        document.getElementById("buttonLanguageMobile").style.display ="none";
        document.getElementById("button-products").style.display ="none";
        document.getElementById("content-menu-products").classList.toggle("show-content_button-products");
    })
}

export default{
    componentId,
    loadComponent,
}