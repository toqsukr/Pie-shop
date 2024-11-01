'use client'

import { useCart } from '@/modules/cart/store'
import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { useMenu } from '../store'

const BurgerUnit = () => {
  const { burgers } = useMenu()
  const { addPosition } = useCart()

  return (
    <ProductUnit
      header='Burger'
      elements={burgers.map(elem => ({ ...elem, onAddToCart: addPosition }))}
    />
  )
}

export default BurgerUnit
