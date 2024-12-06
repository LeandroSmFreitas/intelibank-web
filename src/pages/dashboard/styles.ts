import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
`;


export const Title = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #000;
    font-family: 'Archivo', sans-serif;
    margin-left: 20px;
`;

export const ContainerTitleAndButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
`;

export const ContainerButton = styled.div`
    width: 200px;
`;

export const ContainerDashboard = styled.div`
    width: calc(100% - 300px);
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F5F6FA;
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

export const ContainerTransactions = styled.div`
    width: 96%;
    min-height: 600px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 10px;
    margin-bottom: 120px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const TitleTransactions = styled.span`
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