import Categories from '@/widgets/categories/Categories'
import { statuses } from './OrderStatus.data'

const OrderStatus = () => {
  return (
    <nav>
      <Categories elements={statuses} />
    </nav>
  )
}

export default OrderStatus
