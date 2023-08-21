import { Avatar, DescriptionWrap, UserLocation, UserName, UserTag } from "./Description.styled"
import PropTypes from 'prop-types'

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


Description.propTypes = {
  items: PropTypes.shape({
  username : PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
  })
}