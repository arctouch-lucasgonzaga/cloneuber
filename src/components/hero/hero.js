import "./hero.scss";
import heroHTML from "./hero.html?raw";
import heroBoxContent from "./hero-box-content/hero-box-content"

export const componentId = "hero";

export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = heroHTML;
    heroBoxContent.loadComponent()
}

export default {
    componentId,
    loadComponent,
}   