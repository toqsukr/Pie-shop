'use client'

import Button from '@/shared/ui/button/Button'
import CartList from '@/widgets/cart-list/CartList'
import { cartPositions } from './CartBill.data'

const CartBill = () => {
  return (
    <section className='flex flex-col gap-12 px-4 h-full'>
      <div className='flex-1 overflow-auto'>
        <CartList elements={cartPositions} />
      </div>
      <Button theme='primary'>Print Bill</Button>
    </section>
  )
}

export default CartBill
