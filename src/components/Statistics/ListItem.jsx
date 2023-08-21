import { ItemWrap, TextLabel, TextPercentage } from "./ListItem.styled"
import PropTypes from 'prop-types'

export const ListItem = ({ listItem : { label, percentage } } )=>{
    return (
        <ItemWrap> 
       <TextLabel >{label}</TextLabel>
      <TextPercentage>{percentage}%</TextPercentage>
        </ItemWrap>
    )

}

ListItem.propTypes = {
    listItem : PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
 })
}
