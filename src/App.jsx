import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/header/Header";
import Home from "./Component/home/Home";
import About from "./Component/about/About";
import Team from "./Component/team/Team";
import Service from "./Component/services/Service";
import Prices from "./Component/prices/Prices";
import Contact from "./Component/contact/Contact";
import Footer from "./Component/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Home name="home" />
      <About name="about" />
      <Team name="team" />
      <Service name="serve" />
      <Prices name="prices" />
      <Contact name="contact" />
      <Footer />
    </div>
  );
}

export default App;
