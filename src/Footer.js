import "./App";

export default function Footer() {
  return (
    <div>
      {/* <!-- FOOTER --> */}
      <footer>
        <div class="container">
          <div class="row">
            {/* <!-- UPPER FOOTER --> */}
            <div class="upper-footer">
              <div class="pull-left">
                {/* <!-- <a class="logo page-scroll" href="#page-top"
                ><img src="img/logo.png" class="img-responsive" alt=""
              /></a> --> */}
                <h1 style={{ color: "white" }}>Gestão de Frotas</h1>
                <p>
                  Fácil, intuitivo e online. Alcance melhores resultados e
                  reduza custos com o nosso sistema para controle e gestão de
                  veículos.
                </p>
              </div>
              <div class="pull-right">
                <ul class="footer-nav">
                  <li class="">
                    <a class="page-scroll" href="#services">
                      Sobre
                    </a>
                  </li>
                  <li class="">
                    <a class="page-scroll" href="#features">
                      Funcionalidades
                    </a>
                  </li>
                  <li class="">
                    <a class="page-scroll" href="#pricing">
                      Planos
                    </a>
                  </li>
                  <li class="active">
                    <a class="page-scroll" href="#team">
                      Equipe
                    </a>
                  </li>
                  <li class="">
                    <a class="page-scroll" href="#clients">
                      Clientes
                    </a>
                  </li>
                </ul>
                <ul class="footer-secondary-nav">
                  <li class="">
                    <a class="page-scroll" href="#phone">
                      <span class="fa fa-phone"></span>+55 (21) 9 8809-3755
                    </a>
                  </li>
                  <li class="">
                    <a class="page-scroll" href="#email">
                      <span class="fa fa-envelope"></span>oi@gestaofrotas.com.br
                    </a>
                  </li>
                  <li class="">
                    <a
                      style={{ textAlign: "left" }}
                      class="page-scroll"
                      href="#address"
                    >
                      <span class="fa fa-map-marker"></span>Avenida Pirineus, nº
                      200 - Vista Alegre - São Gonçalo/RJ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- END UPPER FOOTER -->
            <!-- LOWER FOOTER --> */}
            <div class="lower-footer">
              <div class="pull-left">
                <span>© 2015 LoremIpsum Themes. All rights reserved </span>
                <a href="#terms"> Terms of Service </a>
                <a href="#privacy"> Privacy Policy </a>
              </div>
              <div class="pull-right">
                <a href="#facebook">
                  <span class="fa fa-facebook"></span>
                </a>
                <a href="#twitter">
                  <span class="fa fa-twitter"></span>
                </a>
                <a href="#linkedin">
                  <span class="fa fa-linkedin"></span>
                </a>
                <a href="#youtube">
                  <span class="fa fa-youtube"></span>
                </a>
                <a href="#pinterest">
                  <span class="fa fa-pinterest"></span>
                </a>
                <a href="#skype">
                  <span class="fa fa-skype"></span>
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
