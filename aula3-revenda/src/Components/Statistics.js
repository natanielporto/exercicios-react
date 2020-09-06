import React, { useState, useEffect } from "react";

const Statistics = () => {
  const [list, setList] = useState([]);
  const [whitchBtn, setwhitchBtn] = useState(null);
  const [med, setMed] = useState(0);
  const [tot, setTot] = useState(0);
  const [yrs, setYrs] = useState(0);
  const [quant, setQuant] = useState(0);
  const [search, setsearch] = useState("");
  const [error, setError] = useState(false);

  const currentYear = new Date().getFullYear();
  const data = JSON.parse(localStorage.getItem("cars"));

  function formatValue(val) {
    return Number(val)
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  useEffect(() => {
    const arr = data.length;
    setQuant(arr);
    const values = data.map((el) => Number(el.value));
    const medValue = values.reduce(function (values, value) {
      return values + value;
    }, 0);
    const yearsArr = data.map((el) => currentYear - Number(el.year));
    const medYears = yearsArr.reduce(function (years, year) {
      return years + year;
    }, 0);
    setYrs(Math.floor(currentYear - medYears / quant));
    setTot(formatValue(medValue));
    setMed(formatValue(medValue / quant));
  }, [currentYear, data, quant, tot]);

  const handleClick = ({ target }) => {
    const whitchOne = target.innerText;
    quant === 0 ? setwhitchBtn("error") : setwhitchBtn(whitchOne);

    if (whitchOne === "Pesquisar") {
      setList([]);
      setError(false);
      if (isNaN(search)) {
        const newList = data.filter((el) => el.model === search);
        newList.length === 0 ? setError(true) : setList(newList);
      } else {
        if (search < 5000) {
          const newList = data.filter((el) => el.year === search);
          newList.length === 0 ? setError(true) : setList(newList);
        } else {
          const newList = data.filter((el) => el.value <= Number(search));
          newList.length === 0 ? setError(true) : setList(newList);
        }
      }
    }
  };

  const handleInput = ({ target }) => {
    console.log(typeof target.value);
    setsearch(target.value);
  };

  return (
    <>
      <div className="mb-4 d-flex">
        <input
          className="mr-3"
          style={{ width: "500px" }}
          type="text"
          placeholder="Digite o nome do veículo que deseja pesquisar."
          onChange={handleInput}
        />
        <button
          className={
            whitchBtn === "Pesquisar"
              ? "btn btn-warning mr-3"
              : "btn btn-outline-warning mr-3"
          }
          onClick={handleClick}
        >
          Pesquisar
        </button>
        <button
          className={
            whitchBtn === "Balanço" && whitchBtn !== null
              ? "btn btn-warning"
              : "btn btn-outline-warning"
          }
          onClick={handleClick}
        >
          Balanço
        </button>
      </div>

      {whitchBtn === "Pesquisar" && error === false && (
        <div>
          <p className="mb-2">Carros em estoque</p>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Cor</th>
                <th scope="col">Motor</th>
                <th scope="col">Marchas</th>
                <th scope="col">Ano/Modelo</th>
                <th scope="col">Km</th>
                <th scope="col">Valor</th>
              </tr>
            </thead>
            <tbody>
              {list.map((el) => (
                <tr key={el.id} data-id={el.id} onClick={handleClick}>
                  <td>{el.brands}</td>
                  <td>{el.model}</td>
                  <td>{el.color}</td>
                  <td>{el.engine}</td>
                  <td>{el.shifter}</td>
                  <td>{el.year}</td>
                  <td>{el.km}</td>
                  <td>{formatValue(el.value)}</td>
                  <td>
                    <i
                      className="far fa-edit text-warning pointer mr-3"
                      title="Alterar"
                    ></i>
                    <i
                      className="far fa-times-circle text-danger pointer"
                      title="Excluir"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {whitchBtn === "Pesquisar" && error === true && (
        <p>Nenhum carro encontrado com estas especificações.</p>
      )}
      {whitchBtn === "Balanço" && (
        <div>
          <p className="mb-2">Balanço do estoque</p>
          <table className="col-9 table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Veículos cadastrados</th>
                <th scope="col">Preço total</th>
                <th scope="col">Preço médio</th>
                <th scope="col">Mediana dos Anos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total: {quant}</td>
                <td>{tot}</td>
                <td>{med}</td>
                <td>{yrs}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {whitchBtn === "error" && <div>Erro</div>}
    </>
  );
};

export default Statistics;
