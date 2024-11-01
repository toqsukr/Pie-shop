import OrderInfo from '../order-info/OrderInfo'
import { orders } from './OrderList.data'
import css from './OrderList.module.scss'

const OrderList = () => {
  return (
    <ul className={css.order_list}>
      {orders.map(props => (
        <li key={props.id}>
          <OrderInfo {...props} />
        </li>
      ))}
    </ul>
  )
}

export default OrderList
