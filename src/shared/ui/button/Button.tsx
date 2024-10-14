import cx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import css from './Button.module.scss'
import { ButtonProp } from './Button.type'

const Button: FC<PropsWithChildren<ButtonProp>> = ({
  children,
  className,
  theme = 'primary',
  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(css.button, className, {
        [css.primary]: theme === 'primary',
        [css.secondary]: theme === 'secondary',
      })}>
      {children}
    </button>
  )
}

export default Button
