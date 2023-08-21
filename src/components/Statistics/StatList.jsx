import { ListItem } from "./ListItem"
import { ListItemStyle, StatListStyle } from "./StatList.styled"

export const StatList = ({stats})=>{
    return (
   <StatListStyle> 
    {stats.map(item =>{
    return <ListItemStyle key = {item.id}><ListItem listItem={item}/>
    </ListItemStyle>
   })}
  </StatListStyle>
  )
}