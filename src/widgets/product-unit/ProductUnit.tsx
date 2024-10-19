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
      <div className={css.cards}>
        {elements.map(props => (
          <ProductCard key={props.id} {...props} />
        ))}
      </div>
    </section>
  )
}

export default ProductUnit
