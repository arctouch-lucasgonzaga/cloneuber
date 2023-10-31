(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function y(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(n){if(n.ep)return;n.ep=!0;const t=y(n);fetch(n.href,t)}})();const w=`<header class="header-menu">
  <nav class="menu">
    <ul class="menu-itens">
      <div class="itens-menu-left">
        <li class="icon-menu">
          <a class="text-icon-menu" href="./index.html">Uber</a>
        </li>
        <div class="texts-menu-left">
          <div id="dropdown-company">
          </div>
          <li class="menu-safety">
            <a href="">Safety</a>
          </li>
          <li class="menu-help">
            <a href="">Help</a>
          </li>
        </div>
      </div>
      <div class="itens-menu-right">
        <div id="button-language"></div>
        <div id="dropdown-product"></div>
        <button class="menu-login">Log in</button>
        <li class="menu-singup">Sing Up</li>
      </div>
      <div class="itens-menu-mobile">
        <li class="icon-menu">
          <a class="text-icon-menu" href="./index.html">Uber</a>
        </li>
        <div class="menu-mobile-itens-right">
          <li class="login-mobile" id="size-font">Log in</li>
          <li class="singup-mobile" id="size-font">Sing Up</li>
          <div id="button-menu-mobile"></div>
        </div>
      </div>
    </ul>
  </nav>
</header>
`;const C=`<script
  src="https://kit.fontawesome.com/6c87fca60e.js"
  crossorigin="anonymous"
><\/script>
<div class="menu-products">
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="svg-style"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z"
      fill="white"
    ></path>
  </svg>
  <button id="button" class="dropdown-button">Products</button>
  <div class="dropdown-products_content" id="productsDropContent">
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1 2 10.1V23h20V10.1L12 1Zm7 19h-5v-6h-4v6H5v-8.6L12 5l7 6.4V20Z"
          fill="black"
        ></path>
      </svg>
      <div class="text-style-dropdown">Home</div>
    </li>
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="m21 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.8 0-1.6.6-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2Zm-3 7H5v-1h4v-3H5.2l2-6h9.7l2 6H15v3h4v1h-1Z"
          fill="black"
        ></path>
      </svg>
      <div class="text-style-dropdown">Ride</div>
    </li>
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm0 3c3.9 0 7.1 2.8 7.9 6.5h-3.1c-.6-2-2.5-3.5-4.7-3.5S8 8.5 7.4 10.5H4.3C4.9 6.8 8.1 4 12 4Zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm-7.9-.5h3.1c.5 1.5 1.7 2.8 3.2 3.2v3.1c-3.1-.6-5.6-3.1-6.3-6.3Zm9.4 6.4v-3.1c1.5-.5 2.8-1.7 3.2-3.2h3.1c-.6 3.1-3.1 5.6-6.3 6.3Z"
          fill="black"
        ></path>
      </svg>
      <div class="text-style-dropdown">Drive</div>
    </li>
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <g fill="black">
          <path
            d="M11 8V1H9v7H7V1H5v7H3V1H1v7c0 2.3 1.5 4.2 3.5 4.8V23h3V12.8c2-.7 3.5-2.6 3.5-4.8Z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 6c0-2.8 2.2-5 5-5s5 2.2 5 5v2c0 2.2-1.5 4.1-3.5 4.7V23h-3V12.7c-2-.6-3.5-2.5-3.5-4.7V6Zm5 4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v2c0 1.1.9 2 2 2Z"
          ></path>
        </g></svg>
        <div class="text-style-dropdown">Eat</div>
    </li>
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <title>Wine</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 3v4.4c1.8.8 3 2.6 3 4.6v11H13V12c0-2.1 1.2-3.8 3-4.6V3h-1V1h6v2h-1Zm-4 9v8h4v-8c0-.8-.5-1.5-1.2-1.8l-.8-.3-.8.3c-.7.3-1.2 1-1.2 1.8ZM4.5 16.7C2.5 16.1 1 14.2 1 12V7h10v5c0 2.2-1.5 4.1-3.5 4.7V20H10v3H2v-3h2.5v-3.3ZM8 10H4v2c0 1.1.9 2 2 2s2-.9 2-2v-2Z"
          fill="black"
        ></path></svg>
      <div class="text-style-dropdown">Merchants</div>
    </li>
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <title>Truck</title>
        <path
          d="M22 10V1H2v9H1v6h2v7h4v-2h10v2h4v-7h2v-6h-1ZM6 17h4v-3H6V9h12v5h-4v3h4v1H6v-1ZM19 4v2H5V4h14Z"
          fill="black"
        ></path></svg>
        <div class="text-style-dropdown">Freight</div>
    </li>
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <title>Bike jump</title>
        <path
          d="M24 5h-6.67l-.83-2H12v3h2.5l1.15 2.76L11.38 13h-.62L7.49 5H3v3h2.5l.43 1.03C5.79 9.02 5.65 9 5.5 9A5.51 5.51 0 0 0 0 14.5C0 17.53 2.47 20 5.5 20c2.51 0 4.63-1.7 5.29-4h1.83l.48-.48A5.505 5.505 0 0 0 18.5 20c3.03 0 5.5-2.47 5.5-5.5 0-1.74-.81-3.29-2.08-4.3L24 8.12V5ZM5.5 17a2.5 2.5 0 1 1 .002-5.002A2.5 2.5 0 0 1 5.5 17Zm14.38-9-.91.91-.39-.91h1.3Zm-1.38 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
          fill="black"
        ></path></svg>
        <div class="text-style-dropdown">Bike & scoot</div>
    </li>
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <title>Train</title>
        <path
          d="M21 5s-2.5-4-9-4-9 4-9 4v12.5l2.76 2.76L3.02 23h3.96l3-3h4.04l3 3h3.96l-2.74-2.74L21 17.5V5Zm-9-1c3.33 0 5.19 1.32 6 2.09V8H6V6.09C6.81 5.32 8.67 4 12 4Zm5.26 13H6.74L6 16.26V11h12v5.26l-.74.74Z"
          fill="black"
        ></path>
        ,
        <path d="M15 13H9v3h6v-3Z" fill="black"></path></svg>
      <div class="text-style-dropdown">Transit</div>
    </li>
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <title>Briefcase</title>
        <path
          d="M18 6V1H6v5H1v16h22V6h-5ZM9 4h6v2H9V4Zm11 15H4V9h16v10Z"
          fill="black"
        ></path></svg>
        <div class="text-style-dropdown">Business</div>
    </li>
    <li class="style-products-dropdown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <title>Money</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 20V4h22v16H1Zm16-6h3V7H7v3H4v7h13v-3Zm-2-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          fill="black"
        ></path></svg>
        <div class="text-style-dropdown">Money</div>
    </li>
  </div>
</div>
`,d="dropdown-product";function Z(){document.querySelector(`#${d}`).innerHTML=C,document.querySelector(".menu-products").addEventListener("click",()=>{document.getElementById("productsDropContent").classList.toggle("show")})}const M={componentId:d,loadComponent:Z};const H=`<div class="menu-company">
<button class="button-company">
  Company
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="svg-company">
    <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill="currentColor"></path>
  </svg>
</button>
<div id="company-content-dropdown" class="classCompany-content">
    <li class="content-dropdown">About us</li>
    <li class="content-dropdown">Our offerings</li>
    <li class="content-dropdown">How Uber works</li>
    <li class="content-dropdown">Global citizenship</li>
    <li class="content-dropdown">Newsroom</li>
    <li class="content-dropdown">Investor relations</li>
    <li class="content-dropdown">Blog</li>
    <li class="content-dropdown">Carrers</li>
</div>
</div>
`,r="dropdown-company";function k(){document.querySelector(`#${r}`).innerHTML=H,document.querySelector(".button-company").addEventListener("click",()=>{document.getElementById("company-content-dropdown").classList.toggle("show")})}const x={componentId:r,loadComponent:k};const L=`<div class="button-language">
  <button class="menu-language" id="button-languageid">
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      class="svg-style"
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z"
        fill="currentColor"
      ></path>
    </svg>
    <a id="size-font">PT-BR</a>
    <div class="language-product-content" id="fullscreen-language">
      <div id="language-selection">
        <div class="box-texts-language">
          <div class="title-language-selection">
            Selecione o idioma de sua preferência
          </div>
          <div class="buttons-language-selection">
            <a class="selection-button1">English</a>
            <a class="selection-button2">Português (BR)</a>
          </div>
          <div class="button-exit">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
              <path
                d="m18.1 8.1-2.2-2.2-3.9 4-3.9-4-2.2 2.2 4 3.9-4 3.9 2.2 2.2 3.9-4 3.9 4 2.2-2.2-4-3.9 4-3.9Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </button>
</div>
`,v="button-language";function B(){document.querySelector(`#${v}`).innerHTML=L,document.querySelector("#button-languageid").addEventListener("click",()=>{document.getElementById("fullscreen-language").classList.toggle("show-content"),document.querySelector(".buttons-language-selection").classList.toggle("button-selection-display")})}const V={componentId:v,loadComponent:B};const I=`<div id="button-hamburguer">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" color="white">
    <path d="M2 6h20v3H2V6Z" fill="white"></path>
    ,
    <path d="M2 15h20v3H2v-3Z" fill="white"></path>
  </svg>
</div>
<div id="conteudo-botao" class="content-button">
  <div id="links-button">
  <div id="button-company-mobile"></div>
  <ul class="lista-links" id="links-menu-mobile">
    <li class="force-color content-safety">Safety</li>
    <li class="force-color content-help">Help</li>
  </ul>
  </div>
  <div id="buttonProductsMobile"></div>
  <div id="buttonLanguageMobile"></div>
  </div>
</div>
`;const $=`<div class="force-color content-company" id="content-company">Company</div>
<svg class="arrow-style" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill="black"></path>
  <ul class="lista-drop" id="lista-drop">
    <li class="item-drop-company">About us</li>
    <li class="item-drop-company">Our offerings</li>
    <li class="item-drop-company">How Uber works</li>
    <li class="item-drop-company">Global citizenship</li>
    <li class="item-drop-company">Newsroom</li>
    <li class="item-drop-company">Investor relations</li>
    <li class="item-drop-company">Blog</li>
    <li class="item-drop-company">Carrers</li>
  </ul>
</svg>
`,p="button-company-mobile";function E(){document.querySelector(`#${p}`).innerHTML=$,document.querySelector("#content-company").addEventListener("click",()=>{document.querySelector(".lista-drop").classList.toggle("show"),document.querySelector("#button-company-mobile").classList.toggle("margin-force")})}const S={componentId:p,loadComponent:E};const T=`
<div class="force-color button-products" id="button-products">
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z"
      fill="black"
    ></path>
  </svg>
  <button class="force-color dropdown-button" id="dropdown-button">
    Products
  </button>
</div>
<div class="force-color content-menu-products" id="content-menu-products">
<li class="style-products-dropdown">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="m21 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.8 0-1.6.6-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2Zm-3 7H5v-1h4v-3H5.2l2-6h9.7l2 6H15v3h4v1h-1Z"
      fill="black"
    ></path>
  </svg>
  <div class="text-style-dropdown">Ride</div>
</li>
<li class="style-products-dropdown">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm0 3c3.9 0 7.1 2.8 7.9 6.5h-3.1c-.6-2-2.5-3.5-4.7-3.5S8 8.5 7.4 10.5H4.3C4.9 6.8 8.1 4 12 4Zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm-7.9-.5h3.1c.5 1.5 1.7 2.8 3.2 3.2v3.1c-3.1-.6-5.6-3.1-6.3-6.3Zm9.4 6.4v-3.1c1.5-.5 2.8-1.7 3.2-3.2h3.1c-.6 3.1-3.1 5.6-6.3 6.3Z"
      fill="black"
    ></path>
  </svg>
  <div class="text-style-dropdown">Drive</div>
</li>
<li class="style-products-dropdown">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <g fill="black">
      <path
        d="M11 8V1H9v7H7V1H5v7H3V1H1v7c0 2.3 1.5 4.2 3.5 4.8V23h3V12.8c2-.7 3.5-2.6 3.5-4.8Z"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 6c0-2.8 2.2-5 5-5s5 2.2 5 5v2c0 2.2-1.5 4.1-3.5 4.7V23h-3V12.7c-2-.6-3.5-2.5-3.5-4.7V6Zm5 4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v2c0 1.1.9 2 2 2Z"
      ></path>
    </g></svg>
    <div class="text-style-dropdown">Eat</div>
</li>
<li class="style-products-dropdown">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <title>Wine</title>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 3v4.4c1.8.8 3 2.6 3 4.6v11H13V12c0-2.1 1.2-3.8 3-4.6V3h-1V1h6v2h-1Zm-4 9v8h4v-8c0-.8-.5-1.5-1.2-1.8l-.8-.3-.8.3c-.7.3-1.2 1-1.2 1.8ZM4.5 16.7C2.5 16.1 1 14.2 1 12V7h10v5c0 2.2-1.5 4.1-3.5 4.7V20H10v3H2v-3h2.5v-3.3ZM8 10H4v2c0 1.1.9 2 2 2s2-.9 2-2v-2Z"
      fill="black"
    ></path></svg>
  <div class="text-style-dropdown">Merchants</div>
</li>
<li class="style-products-dropdown">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <title>Truck</title>
    <path
      d="M22 10V1H2v9H1v6h2v7h4v-2h10v2h4v-7h2v-6h-1ZM6 17h4v-3H6V9h12v5h-4v3h4v1H6v-1ZM19 4v2H5V4h14Z"
      fill="black"
    ></path></svg>
    <div class="text-style-dropdown">Freight</div>
</li>
<li class="style-products-dropdown">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <title>Bike jump</title>
    <path
      d="M24 5h-6.67l-.83-2H12v3h2.5l1.15 2.76L11.38 13h-.62L7.49 5H3v3h2.5l.43 1.03C5.79 9.02 5.65 9 5.5 9A5.51 5.51 0 0 0 0 14.5C0 17.53 2.47 20 5.5 20c2.51 0 4.63-1.7 5.29-4h1.83l.48-.48A5.505 5.505 0 0 0 18.5 20c3.03 0 5.5-2.47 5.5-5.5 0-1.74-.81-3.29-2.08-4.3L24 8.12V5ZM5.5 17a2.5 2.5 0 1 1 .002-5.002A2.5 2.5 0 0 1 5.5 17Zm14.38-9-.91.91-.39-.91h1.3Zm-1.38 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
      fill="black"
    ></path></svg>
    <div class="text-style-dropdown">Bike & scoot</div>
</li>
<li class="style-products-dropdown">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <title>Train</title>
    <path
      d="M21 5s-2.5-4-9-4-9 4-9 4v12.5l2.76 2.76L3.02 23h3.96l3-3h4.04l3 3h3.96l-2.74-2.74L21 17.5V5Zm-9-1c3.33 0 5.19 1.32 6 2.09V8H6V6.09C6.81 5.32 8.67 4 12 4Zm5.26 13H6.74L6 16.26V11h12v5.26l-.74.74Z"
      fill="black"
    ></path>
    ,
    <path d="M15 13H9v3h6v-3Z" fill="black"></path></svg>
  <div class="text-style-dropdown">Transit</div>
</li>
<li class="style-products-dropdown">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <title>Briefcase</title>
    <path
      d="M18 6V1H6v5H1v16h22V6h-5ZM9 4h6v2H9V4Zm11 15H4V9h16v10Z"
      fill="black"
    ></path></svg>
    <div class="text-style-dropdown">Business</div>
</li>
<li class="style-products-dropdown">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <title>Money</title>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 20V4h22v16H1Zm16-6h3V7H7v3H4v7h13v-3Zm-2-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      fill="black"
    ></path></svg>
    <div class="text-style-dropdown">Money</div>
</li>
</div>
</div>
</div>
`,u="buttonProductsMobile";function q(){document.querySelector(`#${u}`).innerHTML=T,document.querySelector("#button-products").addEventListener("click",()=>{document.getElementById("content-menu-products").style.display="flex",document.getElementById("links-button").style.display="none",document.getElementById("buttonLanguageMobile").style.display="none",document.getElementById("button-products").style.display="none",document.getElementById("content-menu-products").classList.toggle("show-content_button-products")})}const P={componentId:u,loadComponent:q};const z=`<div class="menu-button-language-mobile" id="button-language-mobile">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z"
      fill="black"
    ></path>
  </svg>
  <div class="text-button-language-mobile">PT-BR</div>
</div>
<div class="language-product-content-mobile" id="fullscreen-language-mobile">
  <div id="language-selection-mobile">
    <div class="box-texts-language-mobile">
      <div class="title-language-selection-mobile">
        Select your preferred language
      </div>
      <div class="buttons-language-selection-mobile" id="selection-language-mobile">
        <a class="selection-button1-mobile">English</a>
        <a class="selection-button2-mobile">Português (BR)</a>
      </div>
      <div class="button-exit-mobile">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
          <path
            d="m18.1 8.1-2.2-2.2-3.9 4-3.9-4-2.2 2.2 4 3.9-4 3.9 2.2 2.2 3.9-4 3.9 4 2.2-2.2-4-3.9 4-3.9Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</div>
`,h="buttonLanguageMobile";function A(){document.querySelector(`#${h}`).innerHTML=z,document.querySelector("#button-language-mobile").addEventListener("click",()=>{document.getElementById("links-button").style.display="none",document.getElementById("button-products").style.display="none",document.getElementById("button-language-mobile").style.display="none",document.getElementById("fullscreen-language-mobile").classList.toggle("show-content-mobile")})}const U={componentId:h,loadComponent:A},m="button-menu-mobile";function O(){document.querySelector(`#${m}`).innerHTML=I,document.querySelector("#button-hamburguer").addEventListener("click",()=>{document.getElementById("conteudo-botao").classList.toggle("force-content"),document.getElementById("links-button").style.display="block",document.getElementById("buttonLanguageMobile").style.display="flex",document.getElementById("button-products").style.display="flex",document.getElementById("content-menu-products").style.display="none",document.getElementById("button-language-mobile").style.display="flex",document.getElementById("fullscreen-language-mobile").classList.remove("show-content-mobile"),document.getElementById("lista-drop").classList.remove("show"),document.getElementById("button-company-mobile").classList.remove("margin-force")}),S.loadComponent(),P.loadComponent(),U.loadComponent()}const F={componentId:m,loadComponent:O},g="header";function D(){document.querySelector(`#${g}`).innerHTML=w,M.loadComponent(),x.loadComponent(),V.loadComponent(),F.loadComponent()}const s={componentId:g,loadComponent:D};const R=`<main class="espaco"></main>
<section class="content-initial">
  <div class="content-box">
    <img
      src="earner-illustra.png"
      alt="nao foi possivel carregar a imagem corretamente"
      class="image-content-initial-desktop"
    />
    <div class="texts-content-initial">
      <h1 class="title-content-initial">
        Drive when you want, make what you need
      </h1>
      <h2 class="subtitle-content-initial">
        Make money on your schedule with deliveries or rides—or both. You can
        use your own car or choose a rental through Uber.
      </h2>
      <div class="button-content-initial">
        <button class="btn-content-initial">Get Started</button>
        <li class="button-singin">
          Already have an account? Sign in
          <span class="horizontal-line"></span>
        </li>
      </div>
    </div>
    <img
      src="earner-illustra-mobile.webp"
      alt="nao foi possivel carregar a imagem corretamente"
      class="image-content-initial-mobile"
    />
  </div>
</section>
<section class="second-content">
  <div class="second-content-box">
    <img
      src="rideshare-square-desktop.webp"
      alt="nao foi possivel carregar a imagem corretamente"
      class="image-second-content-desktop"
    />
    <div class="texts-second-content">
      <h1 class="title-second-content">Always the ride you want</h1>
      <h2 class="subtitle-second-content">Request a ride, hop in, and go.</h2>
      <div class="inputs-second-content">
        <div class="first-input">
          <input type="text" class="inputs-boxs" placeholder="Enter location" id="first-input"/>
          <button class="svg-input">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              data-baseweb="icon"
            >
              <title>search</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                fill="black"
              ></path>
            </svg>
          </button>
          <div class="svg-input-location">
            <svg
              width="2.5em"
              height="2.5em"
              viewBox="0 0 24 24"
              fill="none"
              tabindex="0"
              role="button"
              class="pe-location-fetch css-bOZeEP"
            >
              <title>Navigate right up</title>
              <path
                d="M10.5 13.5.5 11 21 3l-8 20.5-2.5-10Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
        <span class="vertical-line"></span>
        <div class="second-input">
          <input
            type="text"
            class="inputs-boxs"
            placeholder="Enter destination"
            id="second-input"
          />
          <div class="svg-input">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              data-baseweb="icon"
            >
              <title>search</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 10h-4v4h4v-4ZM7 7v10h10V7H7Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <img
      src="rideshare-square-mobile.webp"
      alt="nao foi possivel carregar a imagem corretamente"
      class="image-second-content-mobile"
    />
  </div>
</section>
<section class="third-content">
  <div class="third-content-box">
    <img
      src="u4b-square.webp"
      alt="nao foi possivel carregar a imagem corretamente"
      class="image-third-content-desktop"
    />
    <div class="texts-third-content">
      <h1 class="title-third-content">
        The Uber you know, reimagined for business
      </h1>
      <h2 class="subtitle-third-content">
        Uber for Business is a platform for managing global rides and meals, and
        local deliveries, for companies of any size.
      </h2>
      <div class="button-third-content">
        <button class="btn-third-content btn-content-initial">
          Get Started
        </button>
        <li class="button-ckeckout">
          Check out our solutions
          <span class="horizontal-line"></span>
        </li>
      </div>
    </div>
    <img
      src="u4b-square-mobile.webp"
      alt="nao foi possivel carregar a imagem corretamente"
      class="image-third-content-mobile"
    />
  </div>
</section>
<section class="fourth-content">
  <div class="fourth-content-box">
    <img
      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_1116/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
      alt="nao foi possivel carregar a imagem corretamente"
      class="image-fourth-content-desktop"
    />
    <div class="texts-fourth-content">
      <h1 class="title-fourth-content">
        Make money by renting out your car
      </h1>
      <h2 class="subtitle-fourth-content">
        Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.
      </h2>
      <div class="button-fourth-content">
        <button class="btn-fourth-content btn-content-initial">
          Get Started
        </button>
      </div>
    </div>
    <img
      src="fleet-management-mobile.webp"
      alt="nao foi possivel carregar a imagem corretamente"
      class="image-fourth-content-mobile"
    />
  </div>
</section>
`,b="main";function G(){document.querySelector(`#${b}`).innerHTML=R;let o=document.getElementById("first-input"),e=document.getElementById("second-input");o.addEventListener("click",()=>{o.classList.add("style-click")}),o.addEventListener("focusout",()=>{o.classList.remove("style-click")}),e.addEventListener("click",()=>{e.classList.add("style-click")}),e.addEventListener("focusout",()=>{e.classList.remove("style-click")})}const c={componentId:b,loadComponent:G};const N=`<footer class="footer-space">
  <div class="content-footer">
    <div class="toplist">
      <div class="left-itens">
        <span class="icon-footer"> Uber </span>
        <span class="text-help"> Visit Help Center </span>
      </div>
      <div class="right-itens">
        <span class="adress-uber">
          Uber Technologies Inc. | Uber do Brasil Tecnologia Ltda | Avenida
          Brigadeiro Faria Lima, n.º 949, Pinheiros, São Paulo/SP - CEP
          05.426-200 | CNPJ: 17.895.646/0001-87
        </span>
      </div>
    </div>
    <div class="footer-link-list-content">
      <div class="list-company">
        <span class="title-company">Company</span>
        <ul class="itens-list-company">
          <li class="links-company">About Us</li>
          <li class="links-company">Our Offerings</li>
          <li class="links-company">Newsroom</li>
          <li class="links-company">Investors</li>
          <li class="links-company">Blog</li>
          <li class="links-company">Carrers</li>
          <li class="links-company">Ai</li>
          <li class="links-company">Gift Cards</li>
        </ul>
      </div>
      <div class="list-products">
        <span class="title-products">Products</span>
        <ul class="itens-list-products">
          <li class="links-products">Ride</li>
          <li class="links-products">Drive</li>
          <li class="links-products">Deliver</li>
          <li class="links-products">Uber for Business</li>
          <li class="links-products">Uber Freight</li>
        </ul>
      </div>
      <div class="list-global-citizenship">
        <span class="title-global-citizenship">Global Citizenship</span>
        <ul class="itens-list-global">
          <li class="links-global">Safety</li>
          <li class="links-global">Diversity and Inclusion</li>
          <li class="links-global">Sustainability</li>
        </ul>
      </div>
      <div class="list-travel">
        <span class="title-travel">Travel</span>
        <ul class="itens-list-travel">
          <li class="links-travel">Reserve</li>
          <li class="links-travel">Airports</li>
          <li class="links-travel">Cities</li>
        </ul>
      </div>
    </div>
    <div class="footer-social-media">
      <div class="itens-left">
        <div class="icons-social-media">
          <span class="icon-facebook">
            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none">
              <title>facebook</title>
              <path
                d="M21.79 1H2.21C1.54 1 1 1.54 1 2.21v19.57c0 .68.54 1.22 1.21 1.22h10.54v-8.51H9.9v-3.33h2.86V8.71c0-2.84 1.74-4.39 4.27-4.39.85 0 1.71.04 2.56.13v2.97h-1.75c-1.38 0-1.65.65-1.65 1.62v2.12h3.3l-.43 3.33h-2.89V23h5.61c.67 0 1.21-.54 1.21-1.21V2.21C23 1.54 22.46 1 21.79 1Z"
                fill="white"
              ></path>
            </svg>
          </span>
          <span class="icon-twitter">
            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none">
              <title>twitter</title>
              <path
                d="M23 5.13c-.81.36-1.69.61-2.61.72.94-.56 1.66-1.45 2-2.51-.88.52-1.85.9-2.89 1.1A4.558 4.558 0 0 0 16.18 3a4.543 4.543 0 0 0-4.42 5.58c-3.78-.19-7.13-2-9.37-4.75-.39.67-.62 1.45-.62 2.28 0 1.58.8 2.97 2.02 3.78-.75-.02-1.45-.23-2.06-.57v.06c0 2.2 1.57 4.04 3.65 4.45-.38.12-.78.17-1.19.17-.29 0-.58-.03-.85-.08a4.557 4.557 0 0 0 4.25 3.16 9.112 9.112 0 0 1-5.64 1.95c-.37 0-.73-.02-1.08-.06 2.01 1.29 4.4 2.04 6.97 2.04 8.36 0 12.93-6.92 12.93-12.93 0-.2 0-.39-.01-.59.86-.65 1.63-1.45 2.24-2.36Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span class="icon-youtube">
            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none">
              <title>youtube</title>
              <path
                d="M23 12s0-3.85-.46-5.58c-.25-.95-1-1.7-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46c-.95.25-1.69 1.01-1.94 1.96C1 8.15 1 12 1 12s.04 3.85.5 5.58c.25.95 1 1.7 1.95 1.96 1.71.46 8.59.46 8.59.46s6.88 0 8.6-.46c.95-.25 1.69-1.01 1.94-1.96.46-1.73.42-5.58.42-5.58Zm-13 3.27V8.73L15.5 12 10 15.27Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span class="icon-linkedin">
            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none">
              <title>linkedin</title>
              <path
                d="M21.37 1H2.62C1.73 1 1 1.71 1 2.58v18.83c0 .88.73 1.59 1.62 1.59h18.75c.9 0 1.63-.71 1.63-1.59V2.58C23 1.71 22.27 1 21.37 1ZM7.53 19.75H4.26V9.25h3.27v10.5ZM5.89 7.81C4.85 7.81 4 6.96 4 5.92s.84-1.89 1.89-1.89c1.04 0 1.89.85 1.89 1.89.01 1.04-.84 1.89-1.89 1.89Zm13.86 11.94h-3.26v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7v5.19H9.57V9.26h3.13v1.43h.04c.44-.83 1.5-1.7 3.09-1.7 3.3 0 3.91 2.17 3.91 5v5.76h.01Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span class="icon-instagram">
            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none">
              <title>instagram</title>
              <g fill="currentColor">
                <path
                  d="M21.15 2.85C19.05.74 16.23 1 12 1 8.04 1 5 .69 2.85 2.85.74 4.95 1 7.77 1 12c0 3.95-.31 7 1.85 9.15C4.95 23.26 7.77 23 12 23c3.96 0 7 .31 9.15-1.85C23.25 19.05 23 16.23 23 12c0-4.31.24-7.07-1.85-9.15Zm-1.4 16.9c-1.37 1.37-3.18 1.27-7.75 1.27-4.29 0-6.34.15-7.75-1.27-1.44-1.44-1.27-3.51-1.27-7.75 0-4.23-.15-6.33 1.27-7.75C5.66 2.84 7.6 2.98 12 2.98c4.23 0 6.33-.15 7.75 1.27 1.38 1.38 1.27 3.22 1.27 7.75 0 4.24.15 6.34-1.27 7.75Z"
                ></path>
                <path
                  d="M12 6.35a5.65 5.65 0 1 0 .001 11.301A5.65 5.65 0 0 0 12 6.35Zm0 9.32c-2.02 0-3.67-1.64-3.67-3.67 0-2.03 1.64-3.67 3.67-3.67 2.03 0 3.67 1.64 3.67 3.67 0 2.02-1.65 3.67-3.67 3.67ZM17.87 4.81c-.73 0-1.32.59-1.32 1.32 0 .73.59 1.32 1.32 1.32.73 0 1.32-.59 1.32-1.32 0-.73-.59-1.32-1.32-1.32Z"
                ></path>
              </g>
            </svg>
          </span>
        </div>
        <div class="icons-stores">
          <a class="stores-cell" data-baseweb="link" href="https://rides.sng.link/Bw5zn/vz1k?_dl=uber%3A%2F%2F&amp;pcn=uber-com-footer&amp;mvid=[marketing-visitor-id]" target="_self" class="css-ieMCFc css-jssHZe"><img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" alt="Download the Uber app for Android" role="presentation" aria-hidden="true" style="width: 150px;"></a>
          <a class="stores-cell" data-baseweb="link" href="https://rides.sng.link/Cw5zn/564k?_dl=uber%3A%2F%2F&amp;_smtype=3&amp;pcn=uber-com-footer&amp;mvid=[marketing-visitor-id]" target="_self" class="css-ieMCFc css-jssHZe"><img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg" alt="Download the Uber app for IOS" role="presentation" aria-hidden="true" style="width: 140px;"></a>
        </div>
    </div>
    <div class="itens-right">
        <div class="buttons-language-location">
      <div class="button-language-footer">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none">
          <title>Globe</title>
          <path
          d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z"
          fill="currentColor"
          ></path>
        </svg>
        <span class="text-button-language">English</span>
      </div>
      <div class="location-footer">
          <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path></svg>
          <span class="text-location">Arctouch</span>
    </div>
</div>
</div>
</div>
<div class="links-end-footer">
    <div class="box-text-copyright">
        <span class="text-copyright">© 2023 Uber Technologies Inc.</span>
    </div>
    <div class="list-end-footer">
        <span class="texts-end-footer">Privacy</span>
        <span class="texts-end-footer">Acessibility</span>
        <span class="texts-end-footer">Terms</span>
    </div>
</footer>
`,f="footer";function _(){document.querySelector(`#${f}`).innerHTML=N}const a={componentId:f,loadComponent:_};async function j(){document.querySelector("#app").innerHTML=`
    <div id="${s.componentId}"></div>
    <div id="${c.componentId}"></div>
    <div id="${a.componentId}"></div>
  `,s.loadComponent(),c.loadComponent(),a.loadComponent()}j();
