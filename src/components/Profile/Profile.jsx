import { Description } from "./Description"
import { ProfileCard } from "./Profile.styled"
import { Stats } from "./Stats"

export const Profile = ({items}) =>{
    return (
    <ProfileCard>
        <Description items={items}/>
        <Stats items={items}/>
    </ProfileCard>
    )
    
}