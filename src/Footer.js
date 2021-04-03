import "./App.css";

export default function Footer() {
  return (
    <div>
      {/* <!-- FOOTER --> */}
      <footer>
        <div className="container">
          <div className="row">
            {/* <!-- UPPER FOOTER --> */}
            <div className="upper-footer">
              <div className="pull-left">
                {/* <!-- <a className="logo page-scroll" href="#page-top"
                ><img src="img/logo.png" className="img-responsive" alt=""
              /></a> --> */}
                <h1 style={{ color: "white" }}>Gestão de Frotas</h1>
                <p>
                  Fácil, intuitivo e online. Alcance melhores resultados e
                  reduza custos com o nosso sistema para controle e gestão de
                  veículos.
                </p>
              </div>
              <div className="pull-right">
                <ul className="footer-nav">
                  <li className="">
                    <a className="page-scroll" href="#services">
                      Sobre
                    </a>
                  </li>
                  <li className="">
                    <a className="page-scroll" href="#features">
                      Funcionalidades
                    </a>
                  </li>
                  <li className="">
                    <a className="page-scroll" href="#pricing">
                      Planos
                    </a>
                  </li>
                  <li className="active">
                    <a className="page-scroll" href="#team">
                      Equipe
                    </a>
                  </li>
                  <li className="">
                    <a className="page-scroll" href="#clients">
                      Clientes
                    </a>
                  </li>
                </ul>
                <ul className="footer-secondary-nav">
                  <li className="">
                    <a className="page-scroll" href="#phone">
                      <span className="fa fa-phone"></span>+55 (21) 9 8809-3755
                    </a>
                  </li>
                  <li className="">
                    <a className="page-scroll" href="#email">
                      <span className="fa fa-envelope"></span>
                      oi@gestaofrotas.com.br
                    </a>
                  </li>
                  <li className="">
                    <a
                      style={{ textAlign: "left" }}
                      className="page-scroll"
                      href="#address"
                    >
                      <span className="fa fa-map-marker"></span>Avenida
                      Pirineus, nº 200 - Vista Alegre - São Gonçalo/RJ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- END UPPER FOOTER -->
            <!-- LOWER FOOTER --> */}
            <div className="lower-footer">
              <div className="pull-left">
                <span>© 2015 LoremIpsum Themes. All rights reserved </span>
                <a href="#terms"> Terms of Service </a>
                <a href="#privacy"> Privacy Policy </a>
              </div>
              <div className="pull-right">
                <a href="#facebook">
                  <span className="fa fa-facebook"></span>
                </a>
                <a href="#twitter">
                  <span className="fa fa-twitter"></span>
                </a>
                <a href="#linkedin">
                  <span className="fa fa-linkedin"></span>
                </a>
                <a href="#youtube">
                  <span className="fa fa-youtube"></span>
                </a>
                <a href="#pinterest">
                  <span className="fa fa-pinterest"></span>
                </a>
                <a href="#skype">
                  <span className="fa fa-skype"></span>
                </a>
              </div>
            </div>
            {/* <!-- END LOWER FOOTER --> */}
          </div>
        </div>
      </footer>
      {/* <!-- END FOOTER --> */}
    </div>
  );
}
