import styled from "styled-components";

interface Props{
    active?: boolean;
}

export const Container = styled.button`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: transparent;
    outline: none;
    border: none;
`;


export const Menu = styled.div<Props>`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    background-color: ${({ active }) => active ? '#383B3F' : 'transparent'};
    border-radius: 10px;
`;


export const MenuTitle = styled.span<Props>`
    font-size: 22px;
    color: ${({ active }) => active ? '#fff' : '#000'};
    font-family: 'Archivo', sans-serif;
    margin-left: 10px;
`;

export const MenuImage = styled.img`
    
`;