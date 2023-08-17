import "./styles.css";

export function addHeader() {
  document.querySelector("#header").innerHTML = `
    <header class="header-menu">
        <nav class="menu">
            <ul class="menu-itens">
                <div class="itens-menu-left">
                <li class="icon-menu">
                    <a class="text-icon-menu" href="./index.html">Uber</a>
                </li>
                    <li class="menu-company">
                        <a href="" class="text-menu-company">Company</a>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                    </li>
                    <li class="menu-safety">
                        <a href="" class="text-menu-safety">Safety</a>
                    </li>
                    <li class="menu-help">
                        <a href="" class="text-menu-help">Help</a>
                    </li>
                </div>
                <div class="itens-menu-right">
                    <li class="menu-login">
                        <a href="#" class="menu-text-login"">
                                Fazer Login
                        </a>
                    </li>
                    <li class=" menu-cadastre">
                            <a class="menu-text-cadastre" href="#">
                                Sing-up
                            </a>
                    </li>
                    <li class="menu-bar">
                        <i class="fa-solid fa-bars"></i>
                    </li>
                </div>
            </ul>
        </nav>
    </header>
    `;
}
