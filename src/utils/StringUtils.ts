import { Mask } from "../models/enum/input";

const formatToCurrency = (value: string, isMask?: boolean): string => {
  const cleanedValue = value.replace(/[^\d.]/g, ""); 

  if (!isMask) {
    const numericValue = parseFloat(cleanedValue || "0");
    const formatted = numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatted.replace("R$", "R$:");
  } else {
    const numericValue = parseInt(cleanedValue || "0", 10);
    const formatted = (numericValue / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatted.replace("R$", "R$:");
  }
};

const maskCpfCnpj = (input: string): string => {
  const numericValue = input.replace(/\D/g, "");

  if (numericValue.length <= 11) {
    return numericValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
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