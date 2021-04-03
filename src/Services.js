import "./App.css";

export default function Services() {
  return (
    <div>
      {/* <!-- SERVICES --> */}
      <section id="services">
        <div className="container">
          <div className="row">
            {/* <!-- SERVICES HEADING --> */}
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Tecnologia moderna</h2>
              <span className="separator"></span>
              <p className="section-subheading">
                Conte com o que há de mais atual no mundo da tecnologia.
              </p>
            </div>
            {/* <!-- END SERVICES HEADING --> */}
          </div>
          <div className="row">
            <div className="col-md-3">
              <i className="nc-icon-outline heart"></i>
              <h4 className="service-heading">Dimensionamento da Frota</h4>
              <p className="">
                Ter uma frota bem dimensionada é o primeiro passo para uma
                gestão eficiente.
              </p>
            </div>
            <div className="col-md-3">
              <i className="nc-icon-outline keyboard"></i>
              <h4 className="service-heading">Gastos com Combustível</h4>
              <p className="">
                Ter o controle do consumo de combustíveis fornece informações
                importantes para o controle da frota.
              </p>
            </div>
            <div className="col-md-3">
              <i className="nc-icon-outline sign"></i>
              <h4 className="service-heading">Gastos com Manutenção</h4>
              <p className="">
                Tenha um controle eficiente de manutenções que contemple um
                cronograma de revisões, trocas de óleo e outras peças de
                desgaste natural.
              </p>
            </div>
            <div className="col-md-3 last">
              <i className="nc-icon-outline pc"></i>
              <h4 className="service-heading">Gestão de Condutores</h4>
              <p className="">
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
