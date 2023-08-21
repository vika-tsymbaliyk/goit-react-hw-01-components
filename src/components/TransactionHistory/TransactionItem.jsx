import { ItemText, TableItem } from "./TransactionItem.styled"

export const TransactionItem = ({id, type, amount, currency}) =>{
    return (
      <TableItem key ={id}>
      <ItemText>{type}</ItemText>
      <ItemText>{amount}</ItemText>
      <ItemText>{currency}</ItemText>
    </TableItem>
    )
    
}