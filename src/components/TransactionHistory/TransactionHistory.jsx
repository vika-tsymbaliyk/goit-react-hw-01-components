import { TableContainer, TableTitle } from "./TransactionHistory.styled"
import { TransactionItem } from "./TransactionItem"
import PropTypes from 'prop-types'

export const TransactionHistory = ({items}) =>{
    return (
   <TableContainer>
    <thead>
    <tr>
      <TableTitle>Type</TableTitle>
      <TableTitle>Amount</TableTitle>
      <TableTitle>Currency</TableTitle>
    </tr>
  </thead>

  <tbody>
  {items.map(({ id, type, amount, currency }) => {
     return <TransactionItem
        key={id}
        type={type}
        amount={amount}
        currency={currency}></TransactionItem>
                    })}
  </tbody>
  </TableContainer>
    )
    
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired})
    ).isRequired
}