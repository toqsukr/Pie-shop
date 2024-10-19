import Category from '@/shared/ui/category/Category'
import { FC } from 'react'
import css from './Categories.module.scss'
import { CategoriesProp } from './Categories.type'

const Categories: FC<CategoriesProp> = ({ elements }) => {
  return (
    <div className={css.categories}>
      {elements.map(props => (
        <Category key={props.text} {...props} />
      ))}
    </div>
  )
}

export default Categories
