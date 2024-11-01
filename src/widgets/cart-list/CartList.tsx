import { FC } from 'react'
import CartPosition from '../cart-position/CartPosition'
import css from './CartList.module.scss'
import { CartListProp } from './CartList.type'

const CartList: FC<CartListProp> = ({ elements }) => {
  return (
    <ul className={css.cart_list}>
      {elements.map(props => (
        <li key={props.id}>
          <CartPosition {...props} />
        </li>
      ))}
    </ul>
  )
}

export default CartList
