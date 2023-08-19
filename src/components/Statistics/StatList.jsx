import { ListItem } from "./ListItem"

export const StatList = ({stats})=>{
    return (
   <ul> 
    {stats.map(item =>{
    return <li key = {item.id}><ListItem listItem={item}/>
    </li>
   })}
  </ul>
  )
}