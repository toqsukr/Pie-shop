import MenuCategories from '@/features/menu-categories/MenuCategories'
import PizzaUnit from '@/features/pizza-unit/PizzaUnit'

const Menu = () => {
  return (
    <div className='h-full flex flex-col max-h-full gap-8'>
      <MenuCategories />
      <PizzaUnit />
      <PizzaUnit />
      <PizzaUnit />
    </div>
  )
}

export default Menu
