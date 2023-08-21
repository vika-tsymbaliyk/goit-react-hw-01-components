import { StatList } from "./StatList";
import { StatisticSection, Title } from "./Statistics.styled";
import PropTypes from 'prop-types'


export const Statistics = ({title,data}) =>{
    return (
        <StatisticSection>
    {title && <Title className="title">{title}</Title>}
    <StatList stats={data}/>
    </StatisticSection>
    )
    
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
}