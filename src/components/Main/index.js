import useConectaAPI from "../../hooks/useConectaAPI";
import { BuscaCNPJ } from "../../utils/BuscaCNPJ";
import Form from "../Form";
import "./style.css";

const Main = ({ title }) => {
  const data = useConectaAPI();

  const handleSearch = (input) => {

    if (!data || data.length === 0) return null;
    return BuscaCNPJ(input, data);
  };

  return (
    <main id="main">
      <h1 id="form-title">{title}</h1>
      <Form
        formName="consulta"
        formId="consulta"
        formLabel="Pesquise por CNPJ ou Razão Social:"
        formPlaceholder="Digite o CNPJ ou Razão Social"
        onSearch={handleSearch}
      />
    </main>
  );
};

export default Main;
