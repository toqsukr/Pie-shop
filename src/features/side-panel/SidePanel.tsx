'use client'

import Logo from '@/shared/icons/Logo'
import NavPanelList from '@/widgets/nav-panel-list/NavPanelList'
import { usePathname } from 'next/navigation'
import { panelItems } from './SidePanel.data'
import css from './SidePanel.module.scss'

const SidePanel = () => {
  const pathname = usePathname()
  return (
    <aside className={css.side_panel}>
      <div className={css.logo_container}>
        <Logo className='w-13 h-13 text-primary' />
      </div>
      <NavPanelList
        elements={panelItems.map(item => ({
          ...item,
          active: pathname?.includes(item.linkProps.href.toString()),
        }))}
      />
    </aside>
  )
}

export default SidePanel
