import "./button-products-mobile.scss"
import headerHTML from "./button-products-mobile.html?raw"

export const componentId = "buttonProductsMobile"
export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = headerHTML;
    document.querySelector(`#button-products`).addEventListener("click", () => {
        document.getElementById("conteudo-botao").style.display = "none";
        if(document.getElementById("conteudo-botao").style.display = "none"){
            document.getElementById("content-menu-products").classList.toggle("show-content_button-products");
        }
    })
}

export default{
    componentId,
    loadComponent,
}