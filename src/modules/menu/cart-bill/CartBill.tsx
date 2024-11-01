'use client'

import { useCart } from '@/modules/cart/store'
import Button from '@/shared/ui/button/Button'
import CartList from '@/widgets/cart-list/CartList'
import { CartPositionProp } from '@/widgets/cart-position/CartPosition.type'
import { useMenu } from '../store'

const CartBill = () => {
  const { positions, addPosition, decrementPosition, deletePosition } = useCart()
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

  return (
    <section className='flex flex-col gap-12 px-4 h-full'>
      <div className='flex-1 overflow-auto'>
        <CartList elements={elements} />
      </div>
      <Button theme='primary'>Pay Order</Button>
    </section>
  )
}

export default CartBill
