import styled from "styled-components";
import { ButtonShowType } from "../../models/enum/button";

interface ButtonProps {
    showType?: ButtonShowType;
    isSelected?: boolean;
}

export const Container = styled.button<ButtonProps>`
    width: ${({ showType }) => showType === ButtonShowType.VIEW ? '200px' : '80%'};
    height: 50px;
    border: none;
    background-color: ${({ showType }) => showType === ButtonShowType.VIEW ? 'transparent' : '#000'};
    outline: none;
    border-radius: ${({ showType }) => showType === ButtonShowType.VIEW ? '0px' : '5px'};  
    cursor: pointer;
    margin-bottom: 20px;
    border-bottom: ${({ isSelected }) => isSelected ? '1px solid black' : 'none'};
    margin-right: 20px;
`;

export const Text = styled.span<ButtonProps>`
    font-size: 16px;
    color: ${({ showType }) => showType === ButtonShowType.VIEW ? '#000' : '#fff'};
    font-family: 'Archivo', sans-serif;
`;