import Categories from '@/widgets/categories/Categories'
import { menuCategories } from './MenuCategories.data'

const MenuCategories = () => {
  return (
    <nav>
      <Categories elements={menuCategories} />
    </nav>
  )
}

export default MenuCategories
