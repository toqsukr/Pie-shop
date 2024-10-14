'use client'

import CardHeader from '@/shared/ui/card-header/CardHeader'
import Counter from '@/shared/ui/counter/Counter'
import css from './CartPosition.module.scss'

const CartPosition = () => {
  return (
    <div className={css.cart_position}>
      <div id={css.img_wrapper}></div>
      <div id={css.info_wrapper}>
        <CardHeader text='Orange Juice' />
        <strong>$4,99</strong>
        <Counter value={0} decrement={() => {}} increment={() => {}} />
      </div>
    </div>
  )
}

export default CartPosition
