'use client'
import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { useMenu } from '../store'

const DrinkUnit = () => {
  const { drinks } = useMenu()
  return <ProductUnit header='Drink' elements={drinks} />
}

export default DrinkUnit
