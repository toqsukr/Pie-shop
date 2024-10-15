'use client'

import CartPosition from '@/widgets/cart-position/CartPosition'

export default function Home() {
  return (
    <main>
      <CartPosition
        title='Peperony Pizza'
        price='5,29'
        maxAvailable={18}
        onIncrement={() => {}}
        onDecrement={() => {}}
        onEdit={() => {}}
        image={'/pizza.webp'}
        amount={1}
      />
      <CartPosition
        title='Ultimate Cheesee'
        price='5,29'
        maxAvailable={10}
        onIncrement={() => {}}
        onDecrement={() => {}}
        onEdit={() => {}}
        image={'/pizza.webp'}
        amount={4}
        crust='Stuffed crust cheesee'
      />
      <CartPosition
        title='American Favorite'
        price='4,87'
        maxAvailable={12}
        onIncrement={() => {}}
        onDecrement={() => {}}
        onEdit={() => {}}
        image={'/pizza.webp'}
        amount={5}
        crust='Stuffed crust sosis'
        extras='Extra Mozarela'
      />
    </main>
  )
}
