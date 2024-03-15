import items from "../../transactions.json";
import css from "./TransactionHistory.module.css"

const TransactionHistory = () => {
  return (
    <table>
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
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      )}
    </table>
  )
}

export default TransactionHistory