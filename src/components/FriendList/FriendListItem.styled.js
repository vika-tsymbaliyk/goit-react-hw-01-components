import styled from 'styled-components';

export const FriendWrap = styled.div`
    display:flex;
    gap: 15px;
    align-items: center;
`
export const Status = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${ props => (props.color === 'true' ? 'green' : 'red')};
`

export const Avatar = styled.img`
    border-radius: 5px;
`
export const FriendName = styled.p`
  font-weight: 500;
`;