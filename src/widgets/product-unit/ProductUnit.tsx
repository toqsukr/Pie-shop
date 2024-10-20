import { FC } from 'react'
import ProductCard from '../product-card/ProductCard'
import css from './ProductUnit.module.scss'
import { ProductUnitProp } from './ProductUnit.type'

const ProductUnit: FC<ProductUnitProp> = ({ header, elements }) => {
  return (
    <section className={css.unit}>
      <header className={css.header}>
        <h1>Choose {header}</h1>
        <p>{`${elements.length} ${header} Result`}</p>
      </header>
      <ul className={css.cards}>
        {elements.map(props => (
          <li key={props.id}>
            <ProductCard {...props} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductUnit
