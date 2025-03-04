import React from "react";
import CartaoCNPJ from "../CartoesResultado/cartaoCnpj";
import "./style.css";

export default function ExibirResultado({ result }) {
  if (!result) {
    return null;
  }

  return (
    <div className="cnpj-card-container">
      <div className="cnpj-info">
        <p><span className="label">CNPJ:</span> {result.cnpj}</p>
      </div>

      <CartaoCNPJ
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
