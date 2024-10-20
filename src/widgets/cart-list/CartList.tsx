import { FC } from 'react'
import CartPosition from '../cart-position/CartPosition'
import { CartListProp } from './CartList.type'

const CartList: FC<CartListProp> = ({ elements }) => {
  return (
    <ul>
      {elements.map(props => (
        <li key={props.id}>
          <CartPosition {...props} />
        </li>
      ))}
    </ul>
  )
}

export default CartList
