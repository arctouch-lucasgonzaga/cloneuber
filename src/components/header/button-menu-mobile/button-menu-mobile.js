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
    document.getElementById("button-language-mobile").style.display = "flex";
    document.getElementById("fullscreen-language-mobile").classList.remove("show-content-mobile");
    document.getElementById("lista-drop").classList.remove("show");
    document.getElementById("button-company-mobile").classList.remove("margin-force");   
    document.getElementById("html").classList.toggle("overflow-force")
    })
    buttonCompanyMobile.loadComponent();
    buttonProductsMobile.loadComponent();
    buttonLanguageMobile.loadComponent();
}
export default{
    componentId,
    loadComponent,
}