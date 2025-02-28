export function validateInput(value) {

  const sanitizedValue = value.replace(/[^\d]/g, '');


  const cnpjRegex = /^\d{14}$/;  
  const cnpjFormattedRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;  


  if (cnpjRegex.test(sanitizedValue) || cnpjFormattedRegex.test(value)) {
    return { type: 'CNPJ', value };
  } else {
    return { type: 'Razão Social', value };
  }
}
