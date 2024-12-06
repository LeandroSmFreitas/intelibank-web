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

export const ContainerInputAndButton = styled.form`
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 20px;
    button{
        margin-left: 20px;
    }
`;

export const TitleModal = styled.span`
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-family: 'Archivo', sans-serif;
    text-align: left;
    margin-bottom: 10px;
`;

export const ContainerModal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;