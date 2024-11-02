import BurgerUnit from '@/modules/menu/burger-unit/BurgerUnit'
import DrinkUnit from '@/modules/menu/drink-unit/DrinkUnit'
import PancakeUnit from '@/modules/menu/pancake-unit/PancakeUnit'
import PizzaUnit from '@/modules/menu/pizza-unit/PizzaUnit'

const Menu = () => {
  return (
    <div className='flex flex-col flex-1 gap-8'>
      <PizzaUnit />
      <BurgerUnit />
      <PancakeUnit />
      <DrinkUnit />
    </div>
  )
}

export default Menu
