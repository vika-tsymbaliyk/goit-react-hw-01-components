import styled from 'styled-components';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

export const StatListStyle = styled.ul`
list-style:none;
display: flex;

`
export const ListItemStyle = styled.li`
background-color: ${getRandomHexColor};
padding: 15px;
`