import React, { useState } from "react";
import Button from "../Button";
import { validateInput } from "../../utils/validateInput";
import "./style.css";
import ExibirResultado from "../ExibirResultado";
import jsonData from "../../db/exemploCNPJ.json"; // Supondo que o arquivo JSON esteja na pasta data

export default function Form({ formPlaceholder, formLabel, formName, formId }) {
  const [inputValue, setInputValue] = useState(""); // Armazena o valor do input
  const [showResults, setShowResults] = useState(false); // Controla a exibição dos resultados
  const [result, setResult] = useState(null); // Armazena os dados da busca

  // Função para buscar o dado no JSON
  const searchInJson = (input) => {
    const { type, value } = validateInput(input); // Valida o input
    let found = null;

    if (type === "CNPJ") {
      // Busca por CNPJ
      found = jsonData.find(
        (item) =>
          item.cnpj.replace(/[^\d]/g, "") === value.replace(/[^\d]/g, "")
      );
    } else if (type === "Razão Social") {
      // Busca por Razão Social
      found = jsonData.find((item) =>
        item.razaoSocial.toLowerCase().includes(value.toLowerCase())
      );
    }

    return found;
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realiza a busca no JSON
    const result = searchInJson(inputValue);

    // Exibe os resultados ou uma mensagem de não encontrado
    if (result) {
      setResult(result);
    } else {
      alert("Não encontrado");
    }

    // Exibe o componente de resultado após o clique no botão
    setShowResults(true);
  };

  return (
    <form
      id="consulta-Form"
      className="form-box"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="form-group">
        <label className="campo__etiqueta" htmlFor="consulta">
          {formLabel}
        </label>
        <div className="formButon-box">
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
        </div>
        {showResults && <ExibirResultado result={result} />}{" "}
        {/* Passa os resultados para o componente ExibirResultado */}
      </fieldset>
    </form>
  );
}
