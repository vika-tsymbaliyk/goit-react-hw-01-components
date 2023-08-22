import { Label, Quantity, StatsItem, StatsList } from "./Stats.styled"
import PropTypes from 'prop-types'

export const Stats = ({items:{followers, views, likes}})=>{
    return (
        <StatsList>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatsItem>
  </StatsList>
    )

}

Stats.propTypes = {
  items:PropTypes.shape({
  followers:  PropTypes.number.isRequired, 
  views: PropTypes.number.isRequired, 
  likes:  PropTypes.number.isRequired
  })
}