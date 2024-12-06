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

export const ContainerTransactions = styled.div`
    width: calc(100% - 300px);
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F5F6FA;
    padding-left: 20px;
    padding-right: 20px;
`;

export const ContainerView = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;

export const ContainerTransfer = styled.div`
    width: 734px;
    min-height: 542px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    margin-right: 20px;
`;

export const ContainerSummary = styled.div`
    width: 375px;
    min-height: 542px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    margin-right: 20px;
`;