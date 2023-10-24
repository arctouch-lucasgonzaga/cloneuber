import "./header.scss";
import headerHTML from "./header.html?raw";
import dropdownProduct from "./dropdown-product/dropdown-product";
import dropdownCompany from "./dropdown-company/dropdown-company";
import buttonLanguage from "./button-laguange/button-language";
import buttonMenuMobile from "./button-menu-mobile/button-menu-mobile"
export const componentId = "header";

export function loadComponent() {
  document.querySelector(`#${componentId}`).innerHTML = headerHTML;
  dropdownProduct.loadComponent();
  dropdownCompany.loadComponent();
  buttonLanguage.loadComponent();
  buttonMenuMobile.loadComponent();
}

export default {
  componentId,
  loadComponent,
};
