import React from "react";

const bikes = [
  {
    name: "CB650 F",
    cc: "650",
    color: "Amarela",
    year: "2019",
    km: "6.000",
    value: "35900",
    img:
      "https://www.honda.com.br/motos/sites/hda/files/styles/mobile_768x460/public/2020-02/01_0.jpg?itok=tWhbb-Xj  {",
  },
  {
    name: "Jet 50x",
    cc: "49",
    color: "Vermelha",
    year: "2021",
    km: "0",
    value: "6390",
    img:
      "https://http2.mlstatic.com/nova-shineray-jet-50x-49cc-2021-zero-km-D_NQ_NP_692428-MLB31418093085_072019-F.jpg",
  },
  {
    name: "CB250f Twister",
    cc: "250",
    color: "Vermelha",
    year: "2020",
    km: "80",
    value: "16990",
    img:
      "https://www.totalmotorcycle.com/wp-content/uploads/2019/07/2020-Honda-CRF250F2-1024x808.jpg",
  },
  {
    name: "CB650 F1",
    cc: "650",
    color: "Amarela",
    year: "2019",
    km: "6.000",
    value: "35900",
    img:
      "https://www.honda.com.br/motos/sites/hda/files/styles/mobile_768x460/public/2020-02/01_0.jpg?itok=tWhbb-Xj  {",
  },
  {
    name: "Jet 50x1",
    cc: "49",
    color: "Vermelha",
    year: "2021",
    km: "0",
    value: "6390",
    img:
      "https://http2.mlstatic.com/nova-shineray-jet-50x-49cc-2021-zero-km-D_NQ_NP_692428-MLB31418093085_072019-F.jpg",
  },
  {
    name: "CB250f Twister1",
    cc: "250",
    color: "Vermelha",
    year: "2020",
    km: "80",
    value: "16990",
    img:
      "https://www.totalmotorcycle.com/wp-content/uploads/2019/07/2020-Honda-CRF250F2-1024x808.jpg",
  },
];

const Bikes = () => {
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
      {bikes.map((el) => (
        <div className="card" key={el.name}>
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
                CC: {el.cc}
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

export default Bikes;
