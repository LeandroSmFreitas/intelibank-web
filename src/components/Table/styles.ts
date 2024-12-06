import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f9fbfd;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #5b5f6d;
  background-color: #f3f6fb;
  font-family: 'Archivo', sans-serif;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9fbfd;
  }

  &:nth-child(odd) {
    background-color: #ffffff;
  }

  &:hover {
    background-color: #eef3fa;
  }
`;

export const TableCell = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #4a4a4a;
  vertical-align: top;
  font-family: 'Archivo', sans-serif;

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: #3b3f4e;
      font-size: 16px;
    }

    p {
      color: #7a7d85;
      font-size: 12px;
      margin: 4px 0 0;
    }
  }
`;

export const SeeMore = styled.a`
  display: block;
  text-align: right;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    text-decoration: underline;
  }
`;