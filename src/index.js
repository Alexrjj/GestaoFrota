import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import Services from "./Services";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Services />
    <Features />
    <Pricing />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
