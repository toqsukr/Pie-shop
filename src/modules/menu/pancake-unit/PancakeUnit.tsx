'use client'
import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { useMenu } from '../store'

const PancakeUnit = () => {
  const { pancakes } = useMenu()
  return <ProductUnit header='Pancake' elements={pancakes} />
}

export default PancakeUnit
