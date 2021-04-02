import "./App.css";

export default function Header() {
  const pageScroll = {
    color: "white;",
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

  return (
    <div>
      {/* <!-- PRELOADER --> */}
      {/* <div id="preloader">
        <div class="spinner"></div>
      </div> */}
      {/* <!-- MAIN NAV --> */}
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header page-scroll">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#main-menu"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            {/* <!-- MAIN NAV LOGO --> */}
            {/* <!-- <a class="logo page-scroll" href="#header"
            ><img src="img/logo.png" class="img-responsive" alt=""
          /></a> --> */}
            <a class="logo page-scroll" href="#header">
              <p style={pageScroll}>Gestão de Frotas</p>
            </a>
          </div>
          <div class="collapse navbar-collapse" id="main-menu">
            {/* <!-- MAIN NAV LINKS --> */}
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a class="page-scroll" href="#services">
                  Serviços
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#pricing">
                  Planos
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#team">
                  Quem somos
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#contact">
                  Contato
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#login">
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
        <div class="container">
          <div class="intro-text">
            <h1 class="intro-lead-in" style={introLeadIn}>
              Sistema completo para gestão de frotas
            </h1>
            <span class="intro-heading" style={introHeading}>
              Fácil, intuitivo e online. Alcance melhores resultados e reduza
              custos com o nosso sistema para controle e gestão de veículos.
            </span>
            {/* <!-- <div class="header-buttons">
            <a href="#" class="primary-button">Buy Now</a>
            <a href="#features" class="secondary-button page-scroll hidden-xs"
              >Learn More</a
            >
          </div> --> */}

            <div class="header-dashboard">
              {/* <!-- <img src="img/macbook.png" class="dashboard" alt="" /> --> */}
              <img
                src="img/dashboard2.png"
                class="dashboard"
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
