import Categories from '@/widgets/categories/Categories'
import { menuCategories } from './MenuCategories.data'

const MenuCategories = () => {
  return (
    <nav className='flex-1'>
      <Categories elements={menuCategories} />
    </nav>
  )
}

export default MenuCategories
