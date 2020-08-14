import React, { useState } from 'react';

const App = () => {

    const [pacientes, setPacientes] = useState(['aa', 'bb', 'cc','dd']);
    const [nome, setNome] = useState('');
    const [proximo, setProximo] = useState('');
    const [urgente, setUrgente] = useState('');

    const handleNome = e => {
        setNome(e.target.value);
    }

    const handleList = () => {
        if (nome.trim().length < 2) {
            alert('Por favor, informe o nome do paciente');
            return;
        }
        // spread operator
        setPacientes([...pacientes, nome]);
        setNome('');
    }

    const handleNext = () => {
        if (pacientes.length === 0) {
            alert('ERRO: nenhum paciente para ser atendido');
            return;
        }
        
        const next = pacientes[0]
        setProximo(next)
        setPacientes(pacientes.filter((name) => name !== pacientes[0]));
    }
    
    const handleUrgent = () => {
        const urgencia = window.prompt('Qual paciente precisa de urgência?')
        const now = pacientes.filter(el => el === urgencia)
        if (now.length === 0) {
            alert('ERRO: nenhum paciente com este nome para ser atendido');
            return;
        }

        setUrgente(now)
        
        setPacientes(pacientes.filter(el => el !== now[0]))
        setProximo('')
    }
    
    const handleFirstUrgent = () => {
        const urgencia = window.prompt('Qual paciente precisa de urgência?')
        const now = pacientes.filter(el => el === urgencia)
        if (now.length === 0) {
            alert('ERRO: nenhum paciente com este nome para ser atendido');
            return;
        }
        const newRow  = pacientes.filter(el => el !== now[0])
        setPacientes([now[0], ...newRow])
        setProximo('')
    }
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-4">
            <img src="dentista.jpg" alt="Dentista" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <h3>Centro Odontológico Avenida</h3>
            <hr />
            <div className="form-group">
              <label htmlFor="nome">Nome do Paciente:</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                value={nome}
                onChange={handleNome}
              />
            </div>
            <button className="btn btn-primary" onClick={handleList}>
              Adicionar
            </button>
            <button className="btn btn-success ml-3" onClick={handleNext}>
              Atender
            </button>
            <button className="btn btn-danger ml-3" onClick={handleUrgent}>Urgente</button>
            <button className="btn btn-info ml-3" onClick={handleFirstUrgent}>Colocar em 1º</button>
            {urgente && <h4 className="mt-3 p-3 bg-danger text-white">Urgência de Atendimento: {urgente}</h4>}
            <h4 className="mt-3">Paciente em Atendimento: {proximo}</h4>
            <h4>Lista de Pacientes em Espera:</h4>
            <ol className="text-primary font-weight-bold">
              {pacientes.map((paciente) => {
                return <li key={paciente}>{paciente}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    );
}

export default App;