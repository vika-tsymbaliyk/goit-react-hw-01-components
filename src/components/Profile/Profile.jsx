import { Description } from "./Description"
import { ProfileCard } from "./Profile.styled"
import { Stats } from "./Stats"
import PropTypes from 'prop-types'

export const Profile = ({items}) =>{
    return (
    <ProfileCard>
        <Description items={items}/>
        <Stats items={items.stats}/>
    </ProfileCard>
    )
    
}


Profile.propTypes = {
    items: PropTypes.object
}