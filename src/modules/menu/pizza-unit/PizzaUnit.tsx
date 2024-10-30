import ProductUnit from '@/widgets/product-unit/ProductUnit'
import { pizzas } from './PizzaUnit.data'

const PizzaUnit = () => {
  return <ProductUnit header='Pizza' elements={pizzas} />
}

export default PizzaUnit
