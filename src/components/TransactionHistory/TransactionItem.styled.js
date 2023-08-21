import styled from 'styled-components';

export const TableItem = styled.tr`
    background-color: #f8f8f8;
    &:nth-child(even) {
            background-color: #add8e6;
        }
`;

export const ItemText = styled.td`
  text-align:center;
  text-transform: capitalize;
  color: #a2a2a2;
  padding: 10px;
  font-size: 14px;
`;