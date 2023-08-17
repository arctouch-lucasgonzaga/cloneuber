import "./styles.css";

export function addMain() {
  document.querySelector("#main").innerHTML = `
  <main>
    <section class="icons-list">
        <div class="content-wrap">
            <div class="imagem-senhor">
                <div class="senjor-dirigindo">
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_828,h_621/v1653688539/assets/ae/d8db42-6e67-4c9e-9741-1c7503a1983c/original/DotCom_Update_Earner_bg_sml2x.jpg" alt="homem de mais idade dirigindo um veículo" class="imagem-senhordirigindo">
                </div>
            </div>
            <div class="tabpanel">
                <div class="icons-wrap">
                    <nav class="nav-icon-list">
                        <span class="first-icon-list">
                            <i class="fa-solid fa-signal">
                                <p class="first-icon-text">
                                    Faça viagens ou entregas
                                </p>
                            </i>
                        </span>
                        <span class="second-icon-list">
                            <i class="fa-solid fa-car">
                                <p class="second-icon-text">
                                    Viajar
                                </p>
                            </i>
                        </span>
                        <span class="third-icon-list">
                            <i class="fa-solid fa-key">
                                <p class="third-icon-text">
                                    Alugue seus veículos
                                </p>
                            </i>
                        </span>
                </nav>
                </div>
                <div class="tab-content-wrap">
                    <h1 class="content-assuma">Assuma o comando e ganhe</h1>
                    <p class="sub-dirija">Dirija na plataforma com a maior rede de usuários ativos</p>
                    <a href="">
                        <button class="button-cadastre-content">
                            Cadastre-se para dirigir
                        </button>
                    </a>
                    <h2>Saiba mais como dirigir e fazer entregas</h2>
                </div>
            </div>
    <!-- <section class="description-platform">
        <div class="image-city">
            <img src="/Users/lucasgonzaga/dev/uberclone/city.webp" alt="" srcset="">
        </div>
    </section> -->
  </main>
  `;
}
