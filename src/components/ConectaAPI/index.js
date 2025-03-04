import { useEffect, useState } from "react";
import { validateInput } from "../../utils/validateInput";

const ConectaAPI = ({ input }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { type, value } = validateInput(input);
      let found = null;

      try {
        const response = await fetch("https://api.exemplo.com/busca", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tipo: type, valor: value }),
        });

        if (response.ok) {
          const data = await response.json();
          if (type === "CNPJ") {
            found = data.find(
              (item) => item.cnpj.replace(/[^\d]/g, "") === value.replace(/[^\d]/g, "")
            );
          } else if (type === "Razão Social") {
            found = data.find((item) =>
              item.razaoSocial.toLowerCase().includes(value.toLowerCase())
            );
          }
        }
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      } finally {
        setLoading(false);
      }

      setResult(found);
    };

    if (input) {
      fetchData();
    }
  }, [input]); // Reexecuta quando `input` mudar

  if (loading) return <p>Carregando...</p>;

  return result ? (
    <div>
      <p>Resultado encontrado: {JSON.stringify(result)}</p>
    </div>
  ) : (
    <p>Nenhum resultado encontrado</p>
  );
};

export default ConectaAPI;