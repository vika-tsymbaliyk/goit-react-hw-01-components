import { FriendItem, FriendListUl } from "./FriendList.styled"
import { FriendListItem } from "./FriendListItem"

export const FriendList = ({friends}) =>{
    return (
   <FriendListUl>  {friends.map(friend => {
    return <FriendItem key={friend.id}> <FriendListItem friendItem={friend}/> </FriendItem>
   })}
     </FriendListUl>
    )
    
}