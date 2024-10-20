import cx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import css from './NavItem.module.scss'
import { NavItemProp } from './NavItem.type'

const NavItem: FC<NavItemProp> = ({ active, icon, text, linkProps, className, ...props }) => {
  return (
    <Link {...linkProps} className={cx(className, css.item, { [css.active]: active })}>
      <div {...props} className={css.wrapper}>
        {icon}
        {text}
      </div>
    </Link>
  )
}

export default NavItem
