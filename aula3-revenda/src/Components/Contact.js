import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2 className="m-4 pl-2">Mande sua mensagem para nós:</h2>
      <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
        <p>Nome</p>
        <input
          name="firstName"
          className="contactStyle"
          ref={register({
            required: true,
            maxLength: 20,
            pattern: {
              value: /^[A-Z]$/i,
              message: "Nome só pode conter letras. Tente de novo.",
            },
          })}
        />
        <p>Telefone / Whatsapp</p>
        {errors.exampleRequired && (
          <span style={{ color: "red" }}>Campo necessário.</span>
        )}
        <input
          name="phone"
          className="contactStyle"
          type="number"
          ref={register({
            required: true,
            minLength: 9,
            maxLength: 11,
            pattern: {
              value: /^[0-9]$/i,
              message: "Telefone inválido. Tente de novo.",
            },
          })}
        />
        <p>e-Mail</p>
        <input
          name="mail"
          className="contactStyle"
          type="hexadecimal"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "e-Mail inválido. Tente de novo.",
            },
          })}
        />
        <p>Mensagem</p>
        <input name="textarea" type="textarea" className="contactStyle" />
        <p></p>
        <input className="contactStyle" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
