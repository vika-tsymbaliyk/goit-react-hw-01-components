import { TableContainer, TableTitle } from "./TransactionHistory.styled"
import { TransactionItem } from "./TransactionItem"

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