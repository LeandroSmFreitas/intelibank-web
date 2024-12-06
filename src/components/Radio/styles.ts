import styled from "styled-components";

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  display: none; /* Esconde o input original */

  &:checked + label div {
    border-color: black;
    background-color: black;
  }

  &:checked + label div::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RadioCustom = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid gray;
  border-radius: 50%;
  background: transparent;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    border-color: black;
  }
`;

export const RadioLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
`;