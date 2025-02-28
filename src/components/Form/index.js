import React, { useState } from "react";
import Button from "../Button";
import { validateInput } from "../../utils/validateInput";
import "./form.css";

export default function Form({ formPlaceholder, formLabel, formName, formId }) {
  const [inputValue, setInputValue] = useState(""); // Estado para armazenar o valor do input


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { type, value } = validateInput(inputValue);

    // Exibe um alerta com o tipo e o valor
    alert(`Tipo: ${type}\nValor: ${value}`);
  };

  return (
    <form id="consulta-Form" className="form-box" onSubmit={handleSubmit} noValidate>
      <fieldset className="form-group">
        <label className="campo__etiqueta" htmlFor="consulta">
          {formLabel}
        </label>
        <input
          className="campo__escrita"
          type="text"
          name={formName}
          id={formId}
          placeholder={formPlaceholder}
          value={inputValue}
          onChange={handleInputChange} 
        />
        <div className="mensagem-erro"></div>
        <Button title="Consultar" />
      </fieldset>
    </form>
  );
}
