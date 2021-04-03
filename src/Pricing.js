import "./App.css";

export default function Pricing() {
  return (
    <div>
      {/* <!-- PRICING TABLES --> */}
      <section id="pricing">
        <div class="container">
          <div class="row">
            {/* <!-- PRICING TABLES HEADING --> */}
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">Planos</h2>
              <span class="separator"></span>
              <p class="section-subheading">
                Escolha o plano de acordo com a necessidade de sua empresa.
              </p>
            </div>
            {/* <!-- END PRICING TABLES HEADING --> */}
          </div>
          <div class="row outer-margin">
            {/* <!-- PRICING TABLE 1 --> */}
            <div class="col-md-6" style={{ borderRadius: "25px" }}>
              <div
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
                class="row pricing-title"
              >
                BÁSICO
              </div>
              <div
                style={{
                  borderBottomLeftRadius: "10px",
                  BorderBottomRightRadius: "10px",
                }}
                class="row pricing"
              >
                <div class="col-lg-3 col-md-3 col-sm-3">
                  <div class="row">
                    <span class="pricing-price">
                      <span class="currency">R$</span>19,90
                    </span>
                    <span class="pricing-time">/carro</span>
                    <div class="billing-time">cobrado mensalmente</div>
                  </div>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Frota ativa e desmobilizada
                      (com histórico)
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Manutenções preventivas e
                      corretivas
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Sinistros e pneus
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Abastecimento, pedágio e
                      estacionamento
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Controle de multas e
                      licenciamento
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Seguros, financiamentos e
                      outras despesas
                    </span>
                  </span>
                </div>
                <div class="pricing-row button-container">
                  <a
                    style={{ borderRadius: "25px" }}
                    href="#escolher"
                    class="secondary-button secondary-button-inverse"
                  >
                    Escolher
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- PRICING TABLE 2 --> */}
            <div class="col-md-6">
              <div
                style={{
                  borderRopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
                class="row pricing-title"
              >
                PREMIUM
              </div>
              <div
                style={{
                  borderRopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
                class="row pricing active"
              >
                <div class="col-lg-3 col-md-3 col-sm-3">
                  <div class="row">
                    <span class="pricing-price">
                      <span class="currency">R$</span>79,90
                    </span>
                    <span class="pricing-time">/carro</span>
                    <div class="billing-time">cobrado mensalmente</div>
                  </div>
                </div>
                <div class="pricing-row selected">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-plus"></i>Tudo incluso no básico e mais:
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Localização em tempo real
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Histórico de localizações
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Alertas de problemas mecânicos
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Sensores de velocidade
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Relatório de consumo
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Relatório de alarme
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Relatório de consumo
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Cerca eletrônica de
                      rastreamento
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Alertas de chamada preventiva
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Controle e lembretes de
                      vencimento de CNH
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Pool de movimentações de
                      veículos
                    </span>
                  </span>
                </div>
                <div class="pricing-row">
                  <span class="pricing-value">
                    <span class="pricing-option">
                      <i class="fa fa-check"></i>Relatórios e dashboard
                    </span>
                  </span>
                </div>

                <div class="pricing-row button-container">
                  <a
                    style={{ bordeRadius: "25px" }}
                    href="#escolher"
                    class="secondary-button"
                  >
                    Escolher
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- PRICING TABLES --> */}
    </div>
  );
}
