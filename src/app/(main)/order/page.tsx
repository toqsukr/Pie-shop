import OrderList from '@/modules/order/order-list/OrderList'
import OrderStatus from '@/modules/order/order-status/OrderStatus'

const Order = () => {
  return (
    <div className='flex flex-col gap-10'>
      <OrderStatus />
      <OrderList />
    </div>
  )
}

export default Order
