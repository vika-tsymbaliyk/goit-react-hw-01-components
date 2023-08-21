import { ItemText, TableItem } from "./TransactionItem.styled"
import PropTypes from 'prop-types'

export const TransactionItem = ({id, type, amount, currency}) =>{
    return (
      <TableItem key ={id}>
      <ItemText>{type}</ItemText>
      <ItemText>{amount}</ItemText>
      <ItemText>{currency}</ItemText>
    </TableItem>
    )
    
}

TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount:PropTypes.string.isRequired
}