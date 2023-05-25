import PropTypes from 'prop-types'
import css from "./TransactionHistory.module.css";
import {TransactionItem} from 'components/TransactionItem/TransactionItem';

export const TransactionHistory = ({items}) => {
    return (<table className={css.transactionhistory}>
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>
    <tbody>
            {items.map(({ id, type, amount, currency }) =>
                <TransactionItem
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency} />)
            }
    </tbody>
</table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired
}