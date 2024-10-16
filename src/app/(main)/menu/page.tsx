import ProductCard from '@/widgets/product-card/ProductCard'

const Menu = () => {
  return (
    <div className='flex gap-12'>
      <ProductCard image='/pizza.webp' amount={15} price='4,67' title='American Favorite' />
      <ProductCard image='/pizza.webp' amount={4} price='5,99' title='Meat Lovers' />
      <ProductCard image='/pizza.webp' amount={21} price='2,49' title='American Cheesee' />
      <ProductCard image='/pizza.webp' amount={2} price='11,99' title='Chicken mushroom' />
    </div>
  )
}

export default Menu
