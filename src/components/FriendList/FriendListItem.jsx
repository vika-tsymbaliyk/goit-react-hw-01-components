import { Avatar, FriendWrap, Status, FriendName } from "./FriendListItem.styled"

export const FriendListItem = ({friendItem : {avatar, name, isOnline}}) =>{
    return (
   <FriendWrap>
    <Status color={isOnline ? 'true' : 'false'}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
    </FriendWrap>
    )
    
}