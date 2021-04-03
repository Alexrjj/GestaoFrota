import "./App.css";

export default function Features() {
  const border = {
    borderRadius: "25px",
  };

  return (
    <div>
      {/* <!-- FEATURES --> */}
      <section id="features" class="gray-bg">
        <div class="container">
          <div class="row">
            <div id="features-tabs" class="features-tabs">
              {/* <!-- TAB 1 --> */}
              <div id="features-tab1">
                <div class="row">
                  <h2 class="section-heading">Gestão de Frotas Web</h2>
                  <p class="section-subheading">
                    Obenha de forma fácil acesso à relatórios, gráficos e
                    acompanhamentos. Permite o registro de novos lançamentos de
                    forma prática e rápida.
                  </p>
                </div>
                <ul>
                  <li>Dimensionamento da frota</li>
                  <li>Gastos com combustível</li>
                  <li>Gastos com manutenção</li>
                  <li>Gestão de condutores</li>
                </ul>
                <a
                  href="#criarConta"
                  class="primary-button button-inverse"
                  style={border}
                >
                  Criar Conta
                </a>
                <img
                  src="/img/mockups/tab1.png"
                  class="fadeRight animated"
                  alt=""
                />
              </div>
              {/* <!-- END TAB 1 --> */}
              {/* <!-- TAB 2 --> */}
              <div id="features-tab2">
                <div class="row">
                  <h2 class="section-heading">Gestão de Frotas Mobile</h2>
                  <p class="section-subheading">
                    Obenha de forma fácil acesso à relatórios, gráficos e
                    acompanhamentos. Permite o registro de novos lançamentos de
                    forma prática e rápida.
                  </p>
                </div>
                <ul>
                  <li>Dimensionamento da frota</li>
                  <li>Gastos com combustível</li>
                  <li>Gastos com manutenção</li>
                  <li>Gestão de condutores</li>
                </ul>
                <a href="#versaoMobile" class="primary-button button-inverse">
                  Baixar versão mobile
                </a>
                <img
                  src="img/mockups/tab2.png"
                  class="fadeRight animated"
                  alt=""
                />
              </div>
              {/* <!-- END TAB 2 --> */}

              {/* <!-- FEATURES TABS --> */}
              <ul class="tabs">
                <li class="tab col-md-6">
                  <a href="#features-tab1">
                    <span class="triangle">
                      <span class="inner-triangle"></span>
                    </span>
                    Versão Web
                  </a>
                </li>
                <li class="tab col-md-6">
                  <a href="#features-tab2">
                    <span class="triangle">
                      <span class="inner-triangle"></span>
                    </span>
                    Versão Mobile
                  </a>
                </li>
              </ul>
              {/* <!-- END FEATURES TABS --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END FEATURES --> */}
    </div>
  );
}
