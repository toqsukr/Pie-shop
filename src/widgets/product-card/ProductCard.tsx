import Button from '@/shared/ui/button/Button'
import CardHeader from '@/shared/ui/card-header/CardHeader'
import Image from 'next/image'
import { FC } from 'react'
import css from './ProductCard.module.scss'
import { ProductCardProp } from './ProductCard.type'

const ProductCard: FC<ProductCardProp> = ({
  id,
  image,
  title,
  price,
  maxAvailable,
  onAddToCart,
}) => {
  return (
    <div className={css.card}>
      <div id={css.img_wrapper}>
        <Image fill sizes='100%' src={image} alt={title} />
      </div>
      <div id={css.text_wrapper}>
        <CardHeader text={title} />
        <strong className='text-primary text-[1.2rem]'>${price}</strong>
        <span>
          <strong>{maxAvailable} </strong> Available
        </span>
        <Button onClick={() => onAddToCart(id)} theme='secondary'>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
