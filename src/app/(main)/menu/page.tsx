import MenuCategories from '@/features/menu-categories/MenuCategories'
import PizzaUnit from '@/features/pizza-unit/PizzaUnit'
import ControlLayout from '@/layouts/ControlLayout'

const Menu = () => {
  return (
    <ControlLayout>
      <div className='flex flex-col gap-8'>
        <MenuCategories />
        <PizzaUnit />
      </div>
    </ControlLayout>
  )
}

export default Menu
