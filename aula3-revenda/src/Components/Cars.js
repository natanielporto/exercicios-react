import React, { useState, useEffect } from "react";

// TO POPULATE THE CARS ARRAY, JUST UNCOMMENT THIS CODE, RUN THE SITE
// AND COMMENT IT AGAIN.
// const cars = [
//   {
//     brands: "GM",
//     model: "Corsa",
//     engine: "1.0",
//     color: "Preto",
//     shifter: "5 marchas",
//     year: "1995",
//     km: "200.000",
//     value: "10.000",
//     img:
//       "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
//   },
//   {
//     brands: "Ford",
//     model: "Focus",
//     engine: "2.0",
//     color: "Cinza",
//     shifter: "Automático",
//     year: "2012",
//     km: "70.000",
//     value: "39.900",
//     img:
//       "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
//   },
//   {
//     brands: "Volkswagen",
//     model: "Fusca",
//     engine: "1.3",
//     color: "Verde",
//     shifter: "4 marchas",
//     year: "1960",
//     km: "10.000",
//     value: "50.000",
//     img:
//       "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
//   },
//   {
//     brands: "Ford",
//     model: "Fusion",
//     engine: "2.0",
//     color: "Branco",
//     shifter: "Automático",
//     year: "2019",
//     km: "35.000",
//     value: "90.000",
//     img:
//       "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
//   },
//   {
//     brands: "Renault",
//     model: "Twingo",
//     engine: "1.0",
//     color: "Amarelo",
//     shifter: "5 marchas",
//     year: "1990",
//     km: "300.000",
//     value: "900,00",
//     img:
//       "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
//   },
//   {
//     brands: "Laika",
//     model: "Lada",
//     engine: "1.3",
//     color: "Vermelho",
//     shifter: "3 marchas",
//     year: "1970",
//     km: "500.000",
//     value: "6.000",
//     img:
//       "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
//   },
// ];

// localStorage.setItem("cars", JSON.stringify(cars));

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(
      localStorage.getItem("cars")
        ? JSON.parse(localStorage.getItem("cars"))
        : []
    );
  }, []);

  return (
    <div className="row">
      {cars.map((el) => (
        <div className="card" key={el.model + new Date()}>
          <h3 className="cardTitle badge badge-pill badge-warning">
            {el.model} {el.engine} / {el.year}
          </h3>
          <img
            src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600"
            className="imgFit"
            alt="foto de um carro"
          />
          <div className="feats mt-2">
            <div>
              <p className="badge badge-pill badge-danger value d-flex align-items-center mt-3">
                Valor: {el.value}
              </p>
            </div>
            <div className="pills">
              <p className="badge badge-pill badge-info newPill newPill">
                {el.shifter}
              </p>
              <p className="badge badge-pill badge-info newPill ">
                Cor: {el.color}
              </p>
              <p className="badge badge-pill badge-info newPill">Km: {el.km}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
