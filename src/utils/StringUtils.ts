import { useTranslation } from "react-i18next";
import { Mask } from "../models/enum/input";

const formatToCurrency = (value: string, isMask?: boolean): string => {
  // Remove caracteres que não sejam números ou ponto decimal
  const cleanedValue = value.replace(/[^\d.]/g, ""); 

  if (!isMask) {
    const numericValue = parseFloat(cleanedValue || "0"); // Usa parseFloat para manter os decimais
    const formatted = numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatted.replace("R$", "R$:"); // Adiciona o prefixo desejado
  } else {
    const numericValue = parseInt(cleanedValue || "0", 10); // Converte para número inteiro
    const formatted = (numericValue / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatted.replace("R$", "R$:"); // Adiciona o prefixo desejado
  }
};

const maskCpfCnpj = (input: string): string => {
  const numericValue = input.replace(/\D/g, ""); // Remove tudo que não é número

  if (numericValue.length <= 11) {
    // Aplica máscara de CPF
    return numericValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    // Aplica máscara de CNPJ
    return numericValue
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,4})/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }
};

export const ApplyMasks = (mask: Mask, value: string) => {
  switch (mask) {
    case Mask.CPF_CNPJ:
      return maskCpfCnpj(value);
    case Mask.CURRENCY:
      return formatToCurrency(value, true);
    default:
      return value;
  }
}

export const StringUtils = {
  formatToCurrency,
  maskCpfCnpj,
  ApplyMasks
}