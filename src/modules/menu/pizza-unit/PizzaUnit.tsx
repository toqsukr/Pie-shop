'use client'

import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { useMenu } from '../store'

const PizzaUnit = () => {
  const { pizzas } = useMenu()
  return <ProductUnit header='Pizza' elements={pizzas} />
}

export default PizzaUnit
