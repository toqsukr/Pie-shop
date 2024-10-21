import ControlLayout from '@/layouts/ControlLayout'
import OrderStatus from '@/modules/order/order-status/OrderStatus'
import { FC, PropsWithChildren } from 'react'

const Order: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col gap-10'>
      <OrderStatus />
      {children}
    </div>
  )
}

const OrderLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ControlLayout control={<div />} children={<Order children={children} />} />
}

export default OrderLayout
