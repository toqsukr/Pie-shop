'use client'
import { useCart } from '@/modules/cart/store'
import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { useMenu } from '../store'

const PancakeUnit = () => {
  const { pancakes } = useMenu()
  const { addPosition } = useCart()

  return (
    <ProductUnit
      header='Pancake'
      elements={pancakes.map(elem => ({ ...elem, onAddToCart: addPosition }))}
    />
  )
}

export default PancakeUnit
