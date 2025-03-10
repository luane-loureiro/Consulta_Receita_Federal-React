import { useState } from "react";
import ExibirResultado from "../ExibirResultado";
import Button from "../Button"; 
import "./style.css"; 

const Form = ({ onSearch, formLabel, formPlaceholder, formName, formId }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = onSearch(input);
    setResult(res);
    setShowResults(true);
  };

  return (
    <form id={formId} name={formName} onSubmit={handleSubmit} className="form-box">
      <label htmlFor={formId} className="campo__etiqueta">{formLabel}</label>
      <div className="formButon-box">
        <input
          className="campo__escrita"
          type="text"
          id={formId}
          name={formName}
          placeholder={formPlaceholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button title="Consultar" />
      </div>
      {showResults && (
        result ? (
          <ExibirResultado result={result} />
        ) : (
          <p className="mensagem-erro">Nenhum resultado encontrado</p>
        )
      )}
    </form>
  );
};

export default Form;
