import styled from "styled-components";


export const Container = styled.div`
    max-width: 80%;
    min-width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const Title = styled.span`
    font-size: 16px;
    color: black;
    font-family: 'Archivo', sans-serif;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 307px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 10px;
    font-family: 'Archivo', sans-serif;
    font-size: 16px;
    outline: none;
    background-color: transparent;
`;