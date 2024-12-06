import React from "react";
import * as S from "./styles";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({
  label,
  name,
  value,
  checked,
  onChange,
}: RadioButtonProps) => {
    const id = `${name}-${value}`; 

  return (
    <S.RadioWrapper>
      <S.RadioInput
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <S.RadioCustom />
      <S.RadioLabel htmlFor={id}>{label}</S.RadioLabel>
    </S.RadioWrapper>
  );
};

export default RadioButton;