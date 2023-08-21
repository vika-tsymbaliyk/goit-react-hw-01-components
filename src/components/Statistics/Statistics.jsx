import { StatList } from "./StatList";
import { StatisticSection, Title } from "./Statistics.styled";


export const Statistics = ({title,data}) =>{
    return (
        <StatisticSection>
    {title && <Title className="title">{title}</Title>}
    <StatList stats={data}/>
    </StatisticSection>
    )
    
}