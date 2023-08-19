import { StatList } from "./StatList"
import { StatTitle } from "./StatTitle"

export const Statistics = ({title,data}) =>{
    return (
        <div>
    <StatTitle title= {title}/>
    <StatList stats={data}/>
    </div>
    )
    
}