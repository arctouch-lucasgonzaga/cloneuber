import "./button-menu-mobile.scss"
import headerHTML from "./button-menu-mobile.html?raw";
import buttonCompanyMobile from "./button-company-mobile/button-company-mobile"
import buttonProductsMobile from "./button-products-mobile/button-products-mobile"
import buttonLanguageMobile from "./button-language-mobile/button-language-mobile";
export const componentId = "button-menu-mobile"
export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = headerHTML;
    document.querySelector(`#button-hamburguer`).addEventListener("click", () => {
    document.getElementById("conteudo-botao").classList.toggle ("force-content");   
    document.getElementById("links-button").style.display = "block";
    document.getElementById("buttonLanguageMobile").style.display ="flex";
    document.getElementById("button-products").style.display ="flex";
    document.getElementById("content-menu-products").style.display = "none";
    })
    buttonCompanyMobile.loadComponent();
    buttonProductsMobile.loadComponent();
    buttonLanguageMobile.loadComponent();
}
export default{
    componentId,
    loadComponent,
}