import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    align-items: center;
`;

export const ContainerForm = styled.form`
    width: 400px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    background-color: #fff;
    padding: 20px;
`;

export const CompanyName = styled.span`
    font-size: 40px;
    font-weight: bold;
    color: #000;
    font-family: 'Archivo', sans-serif;
    margin-bottom: 60px;
`;

export const TitleForm = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: #000;
    font-family: 'Archivo', sans-serif;
    margin-bottom: 20px;
`;

export const DescriptionForm = styled.span`
    width: 80%;
    font-size: 16px;
    font-weight: 400;
    color: gray;
    font-family: 'Archivo', sans-serif;
    margin-bottom: 20px;
`;

export const HaveAccount = styled.a`
    width: 80%;
    font-size: 16px;
    font-weight: 400;
    color: gray;
    font-family: 'Archivo', sans-serif;
    margin-bottom: 20px;
    text-align: right;
    cursor: pointer;
`;