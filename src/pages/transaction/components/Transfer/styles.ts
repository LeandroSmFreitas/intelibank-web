import styled from "styled-components";

export const ContainerTransfer = styled.div`
    width: 100%;
    min-height: 542px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    margin-right: 20px;
    margin-bottom: 120px;
    padding-right: 20px;
    padding-left: 20px;
`;

export const Title = styled.span`
    font-size: 20px;
    color: #000;
    font-weight: 400;
    font-family: 'Archivo', sans-serif;
    margin-top: 20px;
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    border-bottom: 1px dashed #000;
    margin-top: 20px;
`;

export const ContainerAllOptions = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;


export const ContainerOption = styled.div`
    width: 200px;
    height: 80px;
    background-color: #F5F6FA;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    border: 1px solid lightblue;
    margin-right: 20px;
    padding-left: 20px;
`;

export const TextOption = styled.span`
    font-size: 16px;
    color: #000;
    font-family: 'Archivo', sans-serif;
`;

export const ContainerInputs = styled.div`
    width: 500px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;