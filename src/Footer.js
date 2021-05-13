import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import logo from "./img/logos/logo1.png";

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
                <a className="logo page-scroll" href="#page-top">
                  <img src={logo} className="img-responsive" alt="" />
                </a>
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
                      <span>
                        <FontAwesomeIcon icon={faPhone} /> +55 (21) 9 8809-3755
                      </span>
                    </a>
                  </li>
                  <li className="">
                    <a className="page-scroll" href="#email">
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        oi@gestaofrotas.com.br
                      </span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      style={{ textAlign: "left" }}
                      className="page-scroll"
                      href="#address"
                    >
                      <span>
                        <FontAwesomeIcon icon={faMapMarker} /> Avenida Pirineus,
                        nº 200 - Vista Alegre - São Gonçalo/RJ
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- END UPPER FOOTER -->
            <!-- LOWER FOOTER --> */}
            <div className="lower-footer">
              <div className="pull-left">
                <span>© 2021 Gestão de Frotas. </span>
                <a href="#terms"> Termos de Serviço </a>
                <a href="#privacy"> Política de Privacidade </a>
              </div>
              <div className="pull-right">
                <a href="#facebook">
                  <i>
                    <FontAwesomeIcon icon={faFacebook} />
                  </i>
                </a>
                <a href="#twitter">
                  <i>
                    <FontAwesomeIcon icon={faTwitter} />
                  </i>
                </a>
                <a href="#linkedin">
                  <i>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </i>
                </a>
                <a href="#youtube">
                  <i>
                    <FontAwesomeIcon icon={faYoutube} />
                  </i>
                </a>
                <a href="#pinterest">
                  <i>
                    <FontAwesomeIcon icon={faPinterest} />
                  </i>
                </a>
                <a href="#skype">
                  <i>
                    <FontAwesomeIcon icon={faSkype} />
                  </i>
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
