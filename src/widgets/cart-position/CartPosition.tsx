'use client'

import ActionArea from '@/shared/ui/action-area/ActionArea'
import CardHeader from '@/shared/ui/card-header/CardHeader'
import Counter from '@/widgets/counter/Counter'
import Image from 'next/image'
import { FC } from 'react'
import { IoClose } from 'react-icons/io5'
import css from './CartPosition.module.scss'
import { CartPositionProp } from './CartPosition.type'

const CartPosition: FC<CartPositionProp> = props => {
  const { id, image, title, price, amount, maxAvailable, onDelete, onDecrement, onIncrement } =
    props

  const handleIncrement = () => {
    amount + 1 <= maxAvailable && onIncrement(id)
  }

  const handleDecrement = () => {
    amount - 1 > 0 && onDecrement(id)
  }

  return (
    <div className={css.cart_position}>
      <div id={css.img_wrapper}>
        <Image fill sizes='100%' src={image} alt='pizza' />
      </div>
      <div id={css.info_wrapper}>
        <CardHeader text={title} />
        {props.crust && (
          <p>
            <span>Crust:</span> {props.crust}
          </p>
        )}
        {props.extras && (
          <p>
            <span>Extras:</span> {props.extras}
          </p>
        )}
        <strong>${price}</strong>
        <div id={css.control_panel}>
          <Counter value={amount} decrement={handleDecrement} increment={handleIncrement} />
          <ActionArea onClick={() => onDelete(id)}>
            <IoClose id={css.edit} />
          </ActionArea>
        </div>
      </div>
    </div>
  )
}

export default CartPosition
