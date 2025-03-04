import React from "react";
import "./style.css";

export default function ResultCard({
  cnpj,
  Razao,
  situacao,
  dataAbertura,
  natureza,
  capitalSocial,
  email,
  tel,
  logradouro,
  numero,
  complemento,
  bairro,
  municipio,
  uf,
  cep,
  cnaePrincipal,
  cnaeSecundario
}) {
  return (
    <div className="card-box">
      <div className="card-title">
          <h3>
            <span className="label">{Razao}</span>
          </h3>
          <h3>
            <span className="label">CNPJ:</span> {cnpj}
          </h3>
      </div>
      <div className="card-details">
        <p className="card-info"><span className="label">Razão social:</span> {Razao}</p>
        <p className="card-info"><span className="label">Situação cadastral:</span> {situacao}</p>
        <p className="card-info"><span className="label">Data de abertura:</span> {dataAbertura}</p>
        <p className="card-info"><span className="label">Natureza jurídica:</span> {natureza}</p>
        <p className="card-info"><span className="label">Capital social:</span> {capitalSocial}</p>
        <p className="card-info"><span className="label">Email:</span> {email}</p>
        <p className="card-info"><span className="label">Telefone:</span> {tel}</p>

        <p className="card-info"><span className="label">Logradouro:</span> {logradouro}</p>
        <p className="card-info"><span className="label">Número:</span> {numero}</p>
        <p className="card-info"><span className="label">Complemento:</span> {complemento}</p>
        <p className="card-info"><span className="label">Bairro:</span> {bairro}</p>
        <p className="card-info"><span className="label">Município:</span> {municipio}</p>
        <p className="card-info"><span className="label">UF:</span> {uf}</p>
        <p className="card-info"><span className="label">CEP:</span> {cep}</p>

        <p className="card-info"><span className="label">CNAE Principal:</span> {cnaePrincipal}</p>
        <p className="card-info"><span className="label">CNAE Secundário:</span> {cnaeSecundario}</p>
      </div>
    </div>
  );
}
