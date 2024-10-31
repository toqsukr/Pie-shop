'use client'

import ActionArea from '@/shared/ui/action-area/ActionArea'
import CardHeader from '@/shared/ui/card-header/CardHeader'
import Counter from '@/widgets/counter/Counter'
import Image from 'next/image'
import { FC, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import css from './CartPosition.module.scss'
import { CartPositionProp } from './CartPosition.type'

const CartPosition: FC<CartPositionProp> = props => {
  const { image, title, price, amount, maxAvailable, onEdit, onDecrement, onIncrement } = props

  const [count, setCount] = useState(amount)

  const handleIncrement = () => {
    setCount(prev => (prev + 1 > maxAvailable ? prev : prev + 1))
    onIncrement()
  }

  const handleDecrement = () => {
    setCount(prev => (prev - 1 < 1 ? prev : prev - 1))
    onDecrement()
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
          <Counter value={count} decrement={handleDecrement} increment={handleIncrement} />
          <ActionArea onClick={onEdit}>
            <IoClose id={css.edit} />
          </ActionArea>
        </div>
      </div>
    </div>
  )
}

export default CartPosition
