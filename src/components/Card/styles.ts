import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    margin-right: 20px;
`;

export const Title = styled.span`
    font-size: 20px;
    color: #000;
    font-weight: 400;
    font-family: 'Archivo', sans-serif;
    margin-left: 20px;
    margin-top: 20px;
`;

export const Divider = styled.div`
    height: 1px;
    width: 90%;
    border-bottom: 1px dashed #000;
    margin-top: 20px;
    margin-left: 20px;
`;

export const Value = styled.span`
    font-size: 30px;
    color: #000;
    font-weight: 700;
    font-family: 'Archivo', sans-serif;
    margin-left: 20px;
    margin-top: 20px;
`;