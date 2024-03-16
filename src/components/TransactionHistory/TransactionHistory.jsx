import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
  return (
        <table>     
          <thead>
            <tr>
              <th className={css.listName}>Type</th>
              <th className={css.listName}>Amount</th>
              <th className={css.listName}>Currency</th>
            </tr>
          </thead>
          <tbody>
        {items.map((item) => 
            <tr key={item.id} className={css.listRow}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
        )}
          </tbody>
     
        </table>
      
  )
}

export default TransactionHistory