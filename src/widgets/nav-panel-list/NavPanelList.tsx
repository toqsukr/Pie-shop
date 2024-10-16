import NavItem from '@/shared/ui/nav-item/NavItem'
import { FC } from 'react'
import { NavPanelListProp } from './NavPanelList.type'

const NavPanelList: FC<NavPanelListProp> = ({ elements }) => {
  return (
    <ul className='flex flex-col gap-6'>
      {elements.map((navProp, index) => (
        <li key={index}>
          <NavItem {...navProp} />
        </li>
      ))}
    </ul>
  )
}

export default NavPanelList
