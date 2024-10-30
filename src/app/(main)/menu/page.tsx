import BurgerUnit from '@/modules/menu/burger-unit/BurgerUnit'
import DrinkUnit from '@/modules/menu/drink-unit/DrinkUnit'
import MenuCategories from '@/modules/menu/menu-categories/MenuCategories'
import PancakeUnit from '@/modules/menu/pancake-unit/PancakeUnit'
import PizzaUnit from '@/modules/menu/pizza-unit/PizzaUnit'

const Menu = () => {
  return (
    <div className='h-full flex flex-col max-h-full gap-8'>
      <MenuCategories />
      <PizzaUnit />
      <BurgerUnit />
      <PancakeUnit />
      <DrinkUnit />
    </div>
  )
}

export default Menu
