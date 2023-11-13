import "./hero-box-content.scss";
import heroHTML from "./hero-box-content.html?raw";

export const componentId = "heroBoxContent";

export function loadComponent(){
    document.querySelector(`#${componentId}`).innerHTML = heroHTML;
    document.querySelector(`.icon-1`).addEventListener("click", () => {
        document.querySelector(`.content-box1`).style.display = "flex";
        document.querySelector(`.content-box2`).style.display = "none";
        document.querySelector(`.content-box3`).style.display = "none";
        document.querySelector(`.container`).style.backgroundColor = "black";
        document.querySelector(`.icons-toplist1`).style.borderBottom = "5px solid #000";
        document.querySelector(`.icons-toplist2`).style.borderBottom = "none";
        document.querySelector(`.icons-toplist3`).style.borderBottom = "none";
    })
    document.querySelector(`.icon-2`).addEventListener("click", () => {
        document.querySelector(`.content-box1`).style.display = "none";
        document.querySelector(`.content-box2`).style.display = "flex";
        document.querySelector(`.content-box3`).style.display = "none";
        document.querySelector(`.container`).style.backgroundColor = "purple";
        document.querySelector(`.icons-toplist2`).style.borderBottom = "5px solid #000";
        document.querySelector(`.icons-toplist1`).style.borderBottom = "none";
        document.querySelector(`.icons-toplist3`).style.borderBottom = "none";
    })
    document.querySelector(`.icon-3`).addEventListener("click", () => {
        document.querySelector(`.content-box1`).style.display = "none";
        document.querySelector(`.content-box2`).style.display = "none";
        document.querySelector(`.content-box3`).style.display = "flex";
        document.querySelector(`.container`).style.backgroundColor = "brown";
        document.querySelector(`.icons-toplist3`).style.borderBottom = "5px solid #000";
        document.querySelector(`.icons-toplist1`).style.borderBottom = "none";
        document.querySelector(`.icons-toplist2`).style.borderBottom = "none";
    })
}

export default {
    componentId,
    loadComponent,
}