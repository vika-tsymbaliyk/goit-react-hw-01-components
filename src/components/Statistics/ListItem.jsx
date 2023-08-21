import { ItemWrap, TextLabel, TextPercentage } from "./ListItem.styled"

export const ListItem = ({ listItem : { label, percentage } } )=>{
    return (
        <ItemWrap> 
       <TextLabel >{label}</TextLabel>
      <TextPercentage>{percentage}%</TextPercentage>
        </ItemWrap>
    )

}