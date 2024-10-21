import MenuCategories from '@/modules/menu/menu-categories/MenuCategories'
import PizzaUnit from '@/modules/menu/pizza-unit/PizzaUnit'

const Menu = () => {
  return (
    <div className='h-full flex flex-col max-h-full gap-8'>
      <MenuCategories />
      <PizzaUnit />
      <PizzaUnit />
      <PizzaUnit />
      <PizzaUnit />
    </div>
  )
}

export default Menu
