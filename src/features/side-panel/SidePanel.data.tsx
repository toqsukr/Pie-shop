import { Routes } from '@/shared/constants'
import { NavItemProp } from '@/shared/ui/nav-item/NavItem.type'
import { GoClockFill } from 'react-icons/go'
import { HiHome } from 'react-icons/hi'
import { IoCart } from 'react-icons/io5'
import { MdRestaurantMenu } from 'react-icons/md'
import css from './SidePanel.module.scss'

export const panelItems: NavItemProp[] = [
  {
    icon: <HiHome className={css.icon} />,
    linkProps: { href: Routes.HOME },
    text: 'Home',
  },
  {
    icon: <MdRestaurantMenu className={css.icon} />,
    linkProps: { href: Routes.MENU },
    text: 'Menu',
  },
  {
    icon: <IoCart className={css.icon} />,
    linkProps: { href: Routes.ORDER },
    text: 'Order',
  },
  {
    icon: <GoClockFill className='w-6 h-6' />,
    linkProps: { href: Routes.HISTORY },
    text: 'History',
  },
]
