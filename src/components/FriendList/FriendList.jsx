import { FriendItem, FriendListUl } from "./FriendList.styled"
import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types'

export const FriendList = ({friends}) =>{
    return (
   <FriendListUl>  {friends.map(friend => {
    return <FriendItem key={friend.id}> <FriendListItem friendItem={friend}/> </FriendItem>
   })}
     </FriendListUl>
    )
    
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired})
    ).isRequired
}