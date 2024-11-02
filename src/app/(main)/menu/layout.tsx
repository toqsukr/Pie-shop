import ControlLayout from '@/layouts/ControlLayout'
import CartBill from '@/modules/menu/cart-bill/CartBill'
import MenuCategories from '@/modules/menu/menu-categories/MenuCategories'
import { FC, PropsWithChildren } from 'react'

const MenuLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ControlLayout control={<CartBill />} header={<MenuCategories />} children={children} />
}

export default MenuLayout
