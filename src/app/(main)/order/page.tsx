import { Routes } from '@/shared/constants'
import { redirect } from 'next/navigation'

const Order = () => {
  return redirect(Routes.ORDER_PROCCESS)
}

export default Order
