import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { drinks } from './DrinkUnit.data'

const DrinkUnit = () => {
  return <ProductUnit header='Drink' elements={drinks} />
}

export default DrinkUnit
