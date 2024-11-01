import ControlLayout from '@/layouts/ControlLayout'
import CartBill from '@/modules/menu/cart-bill/CartBill'
import { FC, PropsWithChildren } from 'react'

const MenuLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ControlLayout control={<CartBill />} children={children} />
}

export default MenuLayout
