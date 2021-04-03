import React, { useEffect } from "react";
import importScript from "../src/utils/importScript";
import "./App.css";

export default function Header() {
  const pageScroll = {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: 800,
  };

  const introLeadIn = {
    padding: "0 20rem 2rem",
    lineHeight: "7rem",
    fontWeight: "bold",
  };

  const introHeading = {
    padding: "0 30rem",
    lineHeight: "3rem",
  };

  const dashboard = {
    width: "90%",
    borderRadius: "15px",
  };

  importScript("src/js/jquery.js");
  importScript("src/js/jquery.easing.min.js");
  importScript("src/js/bootstrap.min.js");
  importScript("src/js/smoothscroll.js");
  importScript("src/js/classie.js");
  importScript("src/js/jquery.easytabs.min.js");
  importScript("src/js/piechart.js");
  importScript("src/js/particles.js");
  importScript("src/js/owl.carousel.min.js");
  importScript("src/js/jqBootstrapValidation.js");
  importScript("src/js/scripts.js");

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://use.typekit.net/foobar.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <div>
      {/* <!-- PRELOADER --> */}
      {/* <div id="preloader">
        <div className="spinner"></div>
      </div> */}
      {/* <!-- MAIN NAV --> */}
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#main-menu"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* <!-- MAIN NAV LOGO --> */}
            {/* <!-- <a className="logo page-scroll" href="#header"
            ><img src="img/logo.png" className="img-responsive" alt=""
          /></a> --> */}
            <a className="logo page-scroll" href="#header">
              <p style={pageScroll}>Gestão de Frotas</p>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="main-menu">
            {/* <!-- MAIN NAV LINKS --> */}
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="page-scroll" href="#services">
                  Serviços
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#pricing">
                  Planos
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#team">
                  Quem somos
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#contact">
                  Contato
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#login">
                  Login
                </a>
              </li>
            </ul>
            {/* <!-- END MAIN NAV LINKS --> */}
          </div>
        </div>
      </nav>
      {/* <!-- END MAIN NAV --> */}
      {/* <!-- HEADER --> */}
      <header id="header">
        <div className="container">
          <div className="intro-text">
            <h1 className="intro-lead-in" style={introLeadIn}>
              Sistema completo para gestão de frotas
            </h1>
            <span className="intro-heading" style={introHeading}>
              Fácil, intuitivo e online. Alcance melhores resultados e reduza
              custos com o nosso sistema para controle e gestão de veículos.
            </span>
            {/* <!-- <div className="header-buttons">
            <a href="#" className="primary-button">Buy Now</a>
            <a href="#features" className="secondary-button page-scroll hidden-xs"
              >Learn More</a
            >
          </div> --> */}

            <div className="header-dashboard">
              {/* <!-- <img src="img/macbook.png" className="dashboard" alt="" /> --> */}
              <img
                src="img/dashboard2.png"
                className="dashboard"
                alt=""
                style={dashboard}
              />
            </div>
          </div>
        </div>
        <div id="particles-js"></div>
      </header>
      {/* <!-- END HEADER --> */}
    </div>
  );
}
