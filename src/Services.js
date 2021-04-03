import "./App.css";

export default function Services() {
  return (
    <div>
      {/* <!-- SERVICES --> */}
      <section id="services">
        <div class="container">
          <div class="row">
            {/* <!-- SERVICES HEADING --> */}
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">Tecnologia moderna</h2>
              <span class="separator"></span>
              <p class="section-subheading">
                Conte com o que há de mais atual no mundo da tecnologia.
              </p>
            </div>
            {/* <!-- END SERVICES HEADING --> */}
          </div>
          <div class="row">
            <div class="col-md-3">
              <i class="nc-icon-outline heart"></i>
              <h4 class="service-heading">Dimensionamento da Frota</h4>
              <p class="">
                Ter uma frota bem dimensionada é o primeiro passo para uma
                gestão eficiente.
              </p>
            </div>
            <div class="col-md-3">
              <i class="nc-icon-outline keyboard"></i>
              <h4 class="service-heading">Gastos com Combustível</h4>
              <p class="">
                Ter o controle do consumo de combustíveis fornece informações
                importantes para o controle da frota.
              </p>
            </div>
            <div class="col-md-3">
              <i class="nc-icon-outline sign"></i>
              <h4 class="service-heading">Gastos com Manutenção</h4>
              <p class="">
                Tenha um controle eficiente de manutenções que contemple um
                cronograma de revisões, trocas de óleo e outras peças de
                desgaste natural.
              </p>
            </div>
            <div class="col-md-3 last">
              <i class="nc-icon-outline pc"></i>
              <h4 class="service-heading">Gestão de Condutores</h4>
              <p class="">
                Utilize a Política de Gestão de Frotas para normatizar a gestão
                dos condutores e definir as regras de uso dos veículos
                corporativos.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SERVICES --> */}
    </div>
  );
}
