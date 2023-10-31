import "./footer.scss";
import footerHTML from "./footer.html?raw";
export const componentId = "footer";

export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = footerHTML;
}

export default{
    componentId,
    loadComponent
}