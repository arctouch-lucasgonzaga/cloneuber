(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function v(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(n){if(n.ep)return;n.ep=!0;const e=v(n);fetch(n.href,e)}})();const h=`<header class="header-menu">
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
        <li class="menu-language">
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
        </li>
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
          <i
            class="fa-solid fa-bars fa-lg"
            style="color: #ffffff"
            id="menu-hamburguer"
          ></i>
        </div>
      </div>
    </ul>
  </nav>
</header>
`;const p=`<script
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
`,d="dropdown-product";function u(){document.querySelector(`#${d}`).innerHTML=p,document.querySelector("#button").addEventListener("click",()=>{document.getElementById("productsDropContent").classList.toggle("show")})}const m={componentId:d,loadComponent:u};const f=`<div class="menu-company">
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
`,c="dropdown-company";function g(){document.querySelector(`#${c}`).innerHTML=f,document.querySelector(".button-company").addEventListener("click",()=>{document.getElementById("company-content-dropdown").classList.toggle("show")})}const w={componentId:c,loadComponent:g},r="header";function C(){document.querySelector(`#${r}`).innerHTML=h,m.loadComponent(),w.loadComponent()}const i={componentId:r,loadComponent:C};const y="",a="main";function Z(){document.querySelector(`#${a}`).innerHTML=y}const s={componentId:a,loadComponent:Z};async function H(){document.querySelector("#app").innerHTML=`
    <div id="${i.componentId}"></div>
    <div id="${s.componentId}"></div>
  `,i.loadComponent(),s.loadComponent()}H();