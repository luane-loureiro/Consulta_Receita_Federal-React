import React from "react";
import ResultCard from "../ResultCard"
import "./style.css";

export default function ExibirResultado({ result }) {
  if (!result) {
    return null;
  }

  return (
    <div className="cnpj-card-container">

      <ResultCard
        cnpj={result.cnpj}
        Razao={result.razaoSocial}
        situacao={result.situacaoCadastral}
        dataAbertura={result.dataAbertura}
        natureza={result.naturezaJuridica}
        capitalSocial={result.capitalSocial}
        email={result.email}
        tel={result.telefone}
        logradouro={result.logradouro}
        numero={result.numero}
        complemento={result.complemento}
        bairro={result.bairro}
        municipio={result.municipio}
        uf={result.uf}
        cep={result.cep}
        cnaePrincipal={result.cnaePrincipal}
        cnaeSecundario={result.cnaeSecundario}
      />
    </div>
  );
}