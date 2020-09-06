import React from "react";

const trucks = [
  {
    name: "Corsa",
    engine: "1.0",
    color: "Preto",
    shifter: "5 marchas",
    year: "1995",
    km: "200000",
    value: "10000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Focus",
    engine: "2.0",
    color: "Cinza",
    shifter: "Automático",
    year: "2012",
    km: "70000",
    value: "39900",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Fusca",
    engine: "1.3",
    color: "Verde",
    shifter: "4 marchas",
    year: "1960",
    km: "10000",
    value: "50000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Fusion",
    engine: "2.0",
    color: "Branco",
    shifter: "Automático",
    year: "2019",
    km: "35000",
    value: "90000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Twingo",
    engine: "1.0",
    color: "Amarelo",
    shifter: "5 marchas",
    year: "1990",
    km: "300000",
    value: "90000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Lada",
    engine: "1.3",
    color: "Vermelho",
    shifter: "3 marchas",
    year: "1970",
    km: "500000",
    value: "6000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Corsa1",
    engine: "1.0",
    color: "Preto",
    shifter: "5 marchas",
    year: "1995",
    km: "200000",
    value: "10000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Focus1",
    engine: "2.0",
    color: "Cinza",
    shifter: "Automático",
    year: "2012",
    km: "70000",
    value: "39900",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Fusca1",
    engine: "1.3",
    color: "Verde",
    shifter: "4 marchas",
    year: "1960",
    km: "10000",
    value: "50000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Fusion1",
    engine: "2.0",
    color: "Branco",
    shifter: "Automático",
    year: "2019",
    km: "35000",
    value: "90000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Twingo1",
    engine: "1.0",
    color: "Amarelo",
    shifter: "5 marchas",
    year: "1990",
    km: "300000",
    value: "90000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
  {
    name: "Lada1",
    engine: "1.3",
    color: "Vermelho",
    shifter: "3 marchas",
    year: "1970",
    km: "500000",
    value: "6000",
    img:
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/bolt-ev/colorizer/01-images/2020-bolt-2lz-gpj-colorizer.jpg?imwidth=600",
  },
];

const Trucks = () => {
  function formatValue(val) {
    return Number(val)
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  function formatKm(km) {
    return km.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  return (
    <div className="row">
      {trucks.map((el) => (
        <div className="card" key={el.name + new Date().getMilliseconds()}>
          <h3 className="cardTitle badge badge-pill badge-warning">
            {el.name} {el.engine} / {el.year}
          </h3>
          <img src={el.img} className="imgFit" alt="foto de um carro" />
          <div className="feats mt-2">
            <div>
              <p className="badge badge-pill badge-danger value d-flex align-items-center justify-content-around ml-0 mt-3">
                Valor: {formatValue(el.value)}
              </p>
            </div>
            <div className="pills">
              <p className="badge badge-pill badge-info newPill newPill">
                {el.shifter}
              </p>
              <p className="badge badge-pill badge-info newPill ">
                Cor: {el.color}
              </p>
              <p className="badge badge-pill badge-info newPill">
                Km: {formatKm(el.km)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trucks;
