import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { pizzaUnit } from './PizzaUnit.data'

const PizzaUnit = () => {
  return <ProductUnit header='Pizza' elements={pizzaUnit} />
}

export default PizzaUnit
