'use client'
import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { useMenu } from '../store'

const BurgerUnit = () => {
  const { burgers } = useMenu()
  return <ProductUnit header='Burger' elements={burgers} />
}

export default BurgerUnit
