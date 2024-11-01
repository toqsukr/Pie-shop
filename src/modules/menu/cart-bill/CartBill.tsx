'use client'

import { useCart } from '@/modules/cart/store'
import Button from '@/shared/ui/button/Button'
import CartList from '@/widgets/cart-list/CartList'
import { CartPositionProp } from '@/widgets/cart-position/CartPosition.type'
import { useMenu } from '../store'
import css from './CartBill.module.scss'

const CartBill = () => {
  const { positions, getTotalPrice, addPosition, decrementPosition, deletePosition } = useCart()
  const { getAllMenu } = useMenu()

  const elements = positions.reduce<CartPositionProp[]>((accum, current) => {
    const menuPosition = getAllMenu().find(({ id }) => current.id === id)

    if (!menuPosition) return accum

    const cartPosition: CartPositionProp = {
      ...menuPosition,
      amount: current.amount,
      onDelete: deletePosition,
      onIncrement: addPosition,
      onDecrement: decrementPosition,
    }

    return [...accum, cartPosition]
  }, [])

  const totalPrice = getTotalPrice()

  const totalItems = positions.reduce((accum, { amount }) => accum + amount, 0)

  return (
    <section className='flex flex-col h-full'>
      <div className='flex-1 px-6 overflow-auto'>
        <CartList elements={elements} />
      </div>
      <footer className={css.footer}>
        <div className={css.price}>
          <span>Items ({totalItems})</span>
          <strong>${totalPrice}</strong>
        </div>
        <div className={css.price}>
          <span>Tax (10%)</span>
          <strong>${(totalPrice * 0.1).toFixed(2)}</strong>
        </div>
        <div className={css.price}>
          <span>Total</span>
          <strong>${(totalPrice * 1.1).toFixed(2)}</strong>
        </div>
        <Button theme='primary'>Pay Order</Button>
      </footer>
    </section>
  )
}

export default CartBill
