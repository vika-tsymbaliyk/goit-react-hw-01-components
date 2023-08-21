import { Avatar, FriendWrap, Status, FriendName } from "./FriendListItem.styled"
import PropTypes from 'prop-types'


export const FriendListItem = ({friendItem : {avatar, name, isOnline}}) =>{
    return (
   <FriendWrap>
    <Status color={isOnline ? 'true' : 'false'}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
    </FriendWrap>
    )
}

FriendListItem.propTypes = {
    friendItem : PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired})
}