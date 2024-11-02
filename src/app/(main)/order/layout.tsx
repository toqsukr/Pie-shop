import ControlLayout from '@/layouts/ControlLayout'
import OrderStatus from '@/modules/order/order-status/OrderStatus'
import { FC, PropsWithChildren } from 'react'

const Order: FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex flex-col gap-10'>{children}</div>
}

const OrderLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ControlLayout
      control={<div />}
      header={<OrderStatus />}
      children={<Order children={children} />}
    />
  )
}

export default OrderLayout
