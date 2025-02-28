import React from "react";
import Form from "../Form";
import "./style.css";

export default function Main({ title }) {
  return (
    <main id="main">
      <h1 id="form-title">{title}</h1>
      <Form 
        name="consulta"
        id=""
        formPlaceholder="Digite o CNPJ ou Razão Social" 
        formLabel="Pesquise por CNPJ ou Razão Social: " 
      />
    </main>
  );
}