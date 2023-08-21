import { Label, Quantity, StatsItem, StatsList } from "./Stats.styled"

export const Stats = ({items:{stats:{followers, views, likes}}})=>{
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