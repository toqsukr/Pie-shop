'use client'

import { useCart } from '@/modules/cart/store'
import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { useMenu } from '../store'

const PizzaUnit = () => {
  const { pizzas } = useMenu()
  const { addPosition } = useCart()

  return (
    <ProductUnit
      header='Pizza'
      elements={pizzas.map(elem => ({ ...elem, onAddToCart: addPosition }))}
    />
  )
}

export default PizzaUnit
