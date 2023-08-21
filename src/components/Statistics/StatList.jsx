import { ListItem } from "./ListItem"
import { ListItemStyle, StatListStyle } from "./StatList.styled"
import PropTypes from 'prop-types'

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

StatList.propTypes = {
  stats:PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
).isRequired
}