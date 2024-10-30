import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { pancakes } from './PancakeUnit.data'

const PancakeUnit = () => {
  return <ProductUnit header='Pancake' elements={pancakes} />
}

export default PancakeUnit
