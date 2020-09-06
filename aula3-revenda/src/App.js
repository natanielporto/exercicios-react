import React, { useState } from "react";
import Vehicle from "./Components/Vehicle";
import Bikes from "./Components/Bikes";
import Cars from "./Components/Cars";
import Trucks from "./Components/Trucks";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Social from "./Components/Social";
import End from "./Components/End";
import Statistics from "./Components/Statistics";
import "./style/style.css";

const btns = [
  "Home",
  "Cadastros",
  "Balanço",
  "Carros",
  "Caminhonetes",
  "Motos",
];
const cats = ["A Herbie", "Endereço", "Contato", "Redes Sociais"];

const detail = (
  <div className="my-4 text-white d-flex justify-content-around align-items-center">
    <i className="fas fa-car"></i>
    <i className="fas fa-truck" style={{ fontSize: 24 }}></i>
    <i className="fas fa-handshake" style={{ fontSize: 32 }}></i>
    <i className="fas fa-motorcycle" style={{ fontSize: 24 }}></i>
    <i className="fas fa-taxi"></i>
  </div>
);

const type = (category) => {
  switch (category) {
    case "Home":
      return "warehouse";
    case "Cadastros":
      return "plus";
    case "Carros":
      return "car";
    case "Caminhonetes":
      return "truck";
    case "Motos":
      return "motorcycle";
    case "Balanço":
      return "database";
    default:
      return null;
  }
};

function App() {
  const handleDisplay = (event) => {
    const where = event.target.innerText;
    toggleTab(where);
    switch (where) {
      case "Home":
        toggleTab(false);
        break;
      case "Cadastros":
        changeTab(<Vehicle />);
        break;
      case "Balanço":
        changeTab(<Statistics />);
        break;
      case "Carros":
        changeTab(<Cars />);
        break;
      case "Caminhonetes":
        changeTab(<Trucks />);
        break;
      case "Motos":
        changeTab(<Bikes />);
        break;
      case "A Herbie":
        changeTab(<About />);
        break;
      case "Endereço":
        changeTab(<End />);
        break;
      case "Contato":
        changeTab(<Contact />);
        break;
      case "Redes Sociais":
        changeTab(<Social />);
        break;
      default:
        break;
    }
  };

  const [showTab, toggleTab] = useState(false);
  const [typeTab, changeTab] = useState("");

  return (
    <div className="App">
      <h1 className="mt-3">
        <i className="fas fa-tachometer-alt mr-3"></i>REVENDA HERBIE
      </h1>
      <p className="description mb-5 ">
        Compra, venda e troca de veículos novos e usados
      </p>
      <div className="row">
        <div className="col-2 sidebar d-flex align-items-center">
          <div>
            {detail}
            <div className="mt-2">
              {btns.map((el) => (
                <button
                  key={el + el.index}
                  className="btn my-2 ml-1 btnSpecial"
                  onClick={handleDisplay}
                >
                  <i className={`mr-3 fas fa-${type(el)}`}></i>
                  {el}
                </button>
              ))}
            </div>
            {detail}
            <div>
              {cats.map((el) => (
                <button
                  key={el + el.index}
                  className="btn my-2 ml-1 btnSpecial"
                  onClick={handleDisplay}
                >
                  {type(el) !== null && (
                    <i className={`mr-3 fas fa-${type(el)}`}></i>
                  )}
                  {el}
                </button>
              ))}
            </div>
            {detail}
          </div>
        </div>
        <div className="col-10">
          <div className="text-white">
            {showTab ? (
              typeTab
            ) : (
              <img
                className="col-12 img-fluid"
                src="http://mikecerra.com/wp-content/uploads/2016/12/BMW-dealership-photography-auto-dealership-360-tour-company-virtual-tours-for-automotive-dealerships.jpg"
                alt="Imagem revenda Herbie"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
