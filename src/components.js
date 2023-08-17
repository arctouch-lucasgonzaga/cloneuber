import "./styles/index.css";
import { addHeader } from "./components/header/header";
import { addMain } from "./components/main/main";

export const components = {
  header: addHeader,
  main: addMain,
};
