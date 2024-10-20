import CardHeader from '@/shared/ui/card-header/CardHeader'
import Image from 'next/image'
import { FC } from 'react'
import css from './ProductCard.module.scss'
import { ProductCardProp } from './ProductCard.type'

const ProductCard: FC<ProductCardProp> = ({ image, title, price, amount }) => {
  return (
    <div className={css.card}>
      <div id={css.img_wrapper}>
        <Image layout='fill' src={image} alt={title} />
      </div>
      <div id={css.text_wrapper}>
        <CardHeader text={title} />
        <strong className='text-primary text-[1.2rem]'>${price}</strong>
        <span>
          <strong>{amount} Pan</strong> Available
        </span>
      </div>
    </div>
  )
}

export default ProductCard
