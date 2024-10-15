import cx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import css from './ActionArea.module.scss'
import { ActionAreaProp } from './ActionArea.type'

const ActionArea: FC<PropsWithChildren<ActionAreaProp>> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={cx(className, css.area)}>
      {children}
    </button>
  )
}

export default ActionArea
