import cx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import css from './Category.module.scss'
import { CategoryProp } from './Category.type'

const Category: FC<PropsWithChildren<CategoryProp>> = ({
  text,
  emoji,
  active,
  className,
  ...props
}) => {
  return (
    <button {...props} className={cx(className, css.category, { [css.active]: active })}>
      {emoji && <span>{emoji}</span>}
      {text}
    </button>
  )
}

export default Category
