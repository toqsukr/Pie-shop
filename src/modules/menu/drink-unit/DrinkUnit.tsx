'use client'

import { useCart } from '@/modules/cart/store'
import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { useMenu } from '../store'

const DrinkUnit = () => {
  const { drinks } = useMenu()
  const { addPosition } = useCart()

  return (
    <ProductUnit
      header='Drink'
      elements={drinks.map(elem => ({ ...elem, onAddToCart: addPosition }))}
    />
  )
}

export default DrinkUnit
