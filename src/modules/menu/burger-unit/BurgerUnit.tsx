import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { burgers } from './BurgerUnit.data'

const BurgerUnit = () => {
  return <ProductUnit header='Burger' elements={burgers} />
}

export default BurgerUnit
