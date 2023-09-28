import "./header.scss";
import headerHTML from "./header.html?raw";
import dropdownProduct from "./dropdown-product/dropdown-product";
import dropdownCompany from "./dropdown-company/dropdown-company";
export const componentId = "header";

export function loadComponent() {
  document.querySelector(`#${componentId}`).innerHTML = headerHTML;
  dropdownProduct.loadComponent();
  dropdownCompany.loadComponent();
}
export default {
  componentId,
  loadComponent,
};
