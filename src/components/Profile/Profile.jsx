import { Description } from "./Description"
import { Stats } from "./Stats"

export const Profile = ({items}) =>{
    return (
    <div>
        <Description items={items}/>
        <Stats items={items}/>
    </div>
    )
    
}