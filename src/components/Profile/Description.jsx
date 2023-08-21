import { Avatar, DescriptionWrap, UserLocation, UserName, UserTag } from "./Description.styled"

export const Description = ({items:{username, tag, location, avatar}})=>{
    return (
        <DescriptionWrap>
    <Avatar
      src={avatar}
      alt="User avatar"
      
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </DescriptionWrap>
    )
    
}