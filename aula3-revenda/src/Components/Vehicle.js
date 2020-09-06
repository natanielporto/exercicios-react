import React, { useState, useEffect, useRef, createRef } from "react";
import { useForm } from "react-hook-form";

const Vehicle = () => {
  const { register, handleSubmit, errors, setValue } = useForm();
  const [list, setList] = useState([]);
  const [newButton, changeButton] = useState(false);
  const [newId, readId] = useState(null);
  const currentYear = new Date().getFullYear();

  function formatValue(val) {
    return Number(val)
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  function formatKm(km) {
    return km.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  const handleClear = (event) => {
    const fields = [
      "brands",
      "model",
      "color",
      "engine",
      "shifter",
      "year",
      "km",
      "value",
    ];

    fields.map((el) => setValue(el, ""));
    event.preventDefault();
  };

  useEffect(() => {
    setList(
      localStorage.getItem("cars")
        ? JSON.parse(localStorage.getItem("cars"))
        : []
    );
  }, []);

  const handleAdd = (data, event) => {
    const cars = localStorage.getItem("cars")
      ? JSON.parse(localStorage.getItem("cars"))
      : "";

    data.id = new Date().getTime();

    localStorage.setItem("cars", JSON.stringify([...cars, data]));

    setList([...list, data]);

    handleClear(event);

    event.preventDefault();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    handleClear(event);
  };

  const handleClick = (event) => {
    const tr = event.target.closest("tr");
    const id = Number(tr.getAttribute("data-id"));

    if (event.target.classList.contains("fa-edit")) {
      changeButton(true);

      readId(id);
      setValue("brands", tr.cells[0].innerText);
      setValue("model", tr.cells[1].innerText);
      setValue("color", tr.cells[2].innerText);
      setValue("engine", tr.cells[3].innerText);
      setValue("shifter", tr.cells[4].innerText);
      setValue("year", tr.cells[5].innerText);
      setValue("km", tr.cells[6].innerText);
      setValue("value", tr.cells[7].innerText);
    } else if (event.target.classList.contains("fa-times-circle")) {
      const model = tr.cells[1].innerText;

      if (window.confirm(`Remover o veículo ${model}?`)) {
        const cars = JSON.parse(localStorage.getItem("cars"));

        const newCars = cars.filter((el) => el.id !== id);

        localStorage.setItem("cars", JSON.stringify(newCars));

        setList(newCars);
      }
    }
  };

  const handleUpdate = (data, event) => {
    const cars = JSON.parse(localStorage.getItem("cars"));
    let newArr = [];

    for (let car of cars) {
      if (car.id === newId) {
        data.id = newId;
        newArr.push(data);
      } else {
        newArr.push(car);
      }
    }
    localStorage.setItem("cars", JSON.stringify(newArr));
    setList(newArr);
    handleClear(event);
    changeButton(false);
  };

  return (
    <div className="row d-flex justify-content-between">
      <div className="col-3 pl-5" style={{ height: "80vh" }}>
        <form>
          <div className="form-group mb-3">
            <div className="d-flex justify-content-between">
              <label for="exampleFormControlInput1">MARCA</label>
              {errors.brands && (
                <span className="alert-danger mb-1 px-2">Informe a marca.</span>
              )}
            </div>
            <select
              className="form-control"
              name="brands"
              ref={register({ required: true })}
            >
              <option value="">Selecione a marca</option>
              <option value="Ford">Ford</option>
              <option value="GM">GM</option>
              <option value="Honda">Honda</option>
              <option value="Laika">Laika</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <div className="d-flex justify-content-between">
              <label for="exampleFormControlInput1">MODELO</label>
              {errors.model && (
                <span className="alert-danger mb-1 px-2">
                  Informe o modelo.
                </span>
              )}
            </div>
            <input
              type="text"
              className="form-control"
              name="model"
              placeholder="ex: Focus - Ranger"
              ref={register({ required: true, minLength: 2, maxLength: 30 })}
            />
          </div>
          <div className="form-group mb-3">
            <div className="d-flex justify-content-between">
              <label for="exampleFormControlInput1">COR</label>
              {errors.color && (
                <span className="alert-danger mb-1 px-2">Informe a cor.</span>
              )}
            </div>
            <input
              type="text"
              className="form-control"
              name="color"
              placeholder="ex: Amarelo - Preto"
              ref={register({ required: true, minLength: 2, maxLength: 10 })}
            />
          </div>
          <div className="form-group mb-3">
            <div className="d-flex justify-content-between">
              <label for="exampleFormControlInput1">MOTOR</label>
              {errors.engine && (
                <span className="alert-danger mb-1 px-2">Informe o motor.</span>
              )}
            </div>
            <input
              type="text"
              className="form-control"
              name="engine"
              placeholder="ex: 1.0 - 250cc"
              ref={register({ required: true, minLength: 2, maxLength: 10 })}
            />
          </div>
          <div className="form-group mb-3">
            <div className="d-flex justify-content-between">
              <label for="exampleFormControlInput1">MARCHAS</label>
              {errors.shifter && (
                <span className="alert-danger mb-1 px-2">
                  Informe quantas marchas.
                </span>
              )}
            </div>
            <input
              type="text"
              className="form-control"
              name="shifter"
              placeholder="ex: 4 - 5 - automático"
              ref={register({ required: true, minLength: 1, maxLength: 10 })}
            />
          </div>
          <div className="form-group mb-3">
            <div className="d-flex justify-content-between">
              <label for="exampleFormControlInput1">ANO / MODELO</label>
              {errors.year && (
                <span className="alert-danger mb-1 px-2">
                  Informe o ano / modelo.
                </span>
              )}
            </div>
            <input
              type="number"
              className="form-control"
              name="year"
              placeholder="ex: ano atual"
              ref={register({
                required: true,
                min: currentYear - 30,
                max: currentYear + 1,
              })}
            />
          </div>
          <div className="form-group mb-3">
            <div className="d-flex justify-content-between">
              <label for="exampleFormControlInput1">KM</label>
              {errors.km && (
                <span className="alert-danger mb-1 px-2">
                  Informe quantos kms.
                </span>
              )}
            </div>
            <input
              type="number"
              className="form-control"
              name="km"
              placeholder="ex: 0km - 200000km"
              ref={register({ required: true, min: 0, maxLength: 7 })}
            />
          </div>
          <div className="form-group mb-3">
            <div className="d-flex justify-content-between">
              <label for="exampleFormControlInput1">VALOR</label>
              {errors.value && (
                <span className="alert-danger mb-1 px-2">Informe o valor.</span>
              )}
            </div>
            <input
              type="number"
              className="form-control"
              name="value"
              placeholder="mín: 5000 - máx 100000"
              ref={register({ required: true, min: 5000, max: 100000 })}
            />
          </div>
          <div>
            <button
              className={newButton ? "d-none" : "btn customWarn mr-3"}
              type="submit"
              onClick={handleSubmit(handleAdd)}
            >
              Cadastrar
            </button>
            <button
              className={newButton ? "btn btn-primary mr-3" : "d-none"}
              type="submit"
              onClick={newButton && handleSubmit(handleUpdate)}
            >
              Alterar
            </button>
            <button className="btn btn-danger" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
      <div className="col-9">
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
                <td>{formatKm(el.km)}</td>
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
    </div>
  );
};

export default Vehicle;
