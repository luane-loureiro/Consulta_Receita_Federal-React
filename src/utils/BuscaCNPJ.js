import { ValidateInput } from './validateInput'; // Ajuste o caminho se necessário
import exemploCNPJ from "../db/exemploCNPJ.json"; // Certifique-se de que o caminho esteja correto

export const BuscaCNPJ = (input) => {
  if (!input.trim()) return null;

  const normalizedInput = input.trim().toLowerCase();
  const digits = normalizedInput.replace(/\D/g, "");

  // Validação do input usando a função ValidateInput
  const validation = ValidateInput(input);
  if (!validation) return null;

  let found = null;

  // Se for CNPJ, realiza a busca pelo CNPJ
  if (validation.type === "CNPJ") {
    found = exemploCNPJ.find(
      (item) =>
        item.cnpj.replace(/[^\d]/g, "") === digits // Aqui usamos a variável digits
    );
  } else if (validation.type === "Razão Social") {
    // Se for Razão Social, realiza a busca pela razão social
    found = exemploCNPJ.find(
      (item) =>
        item.razaoSocial.toLowerCase().includes(normalizedInput)
    );
  }

  return found || null; // Retorna o resultado encontrado ou null
};
