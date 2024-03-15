import items from "../../transactions.json";
import css from "./TransactionHistory.module.css"

const TransactionHistory = () => {
    return (
  <table className={css.table}>
  <thead>
    <tr>
      <th className={css.listName}>Type</th>
      <th className={css.listName}>Amount</th>
      <th className={css.listName}>Currency</th>
    </tr>
  </thead>
            {items.map((item) => 
                <tbody key={item.id}>
                    <tr className={css.listRow}>
                        <td  className={css.listElem}>{item.type}</td>
                        <td  className={css.listElem}>{item.amount}</td>
                        <td  className={css.listElem}>{item.currency}</td>
                    </tr>
                </tbody>
            )}
    </table>
  )
}

export default TransactionHistory