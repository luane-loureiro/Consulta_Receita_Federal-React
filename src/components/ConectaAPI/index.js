import { useEffect, useState } from "react";
import { ValidateInput } from "../../utils/validateInput";
import { BuscaCNPJ } from "../../utils/BuscaCNPJ"; 


const ConectaAPI = (props) => {
  const { input = "" } = props || {};
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!input) {
      setResult(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);

      const validation = ValidateInput(input);
      if (!validation) {
        setResult(null);
        setLoading(false);
        return;
      }

      // Simula um delay para imitar o tempo de resposta de uma API
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Chama a função BuscaCNPJ para procurar os dados
      const found = BuscaCNPJ(input);

      setResult(found);
      setLoading(false);
    };

    fetchData();
  }, [input]);

  if (loading) return <p>Carregando...</p>;
  return result ? (
    <p>Resultado encontrado: {JSON.stringify(result)}</p>
  ) : (
    <p>Nenhum resultado encontrado</p>
  );
};

export default ConectaAPI;
