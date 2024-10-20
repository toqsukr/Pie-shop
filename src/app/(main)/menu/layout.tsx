import CartBill from '@/features/cart-bill/CartBill'
import ControlLayout from '@/layouts/ControlLayout'
import { FC, PropsWithChildren } from 'react'

const MenuLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ControlLayout control={<CartBill />} children={children} />
}

export default MenuLayout
