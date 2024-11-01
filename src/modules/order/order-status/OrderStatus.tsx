'use client'

import { Routes } from '@/shared/constants'
import { CategoryProp } from '@/shared/ui/category/Category.type'
import Categories from '@/widgets/categories/Categories'
import { usePathname, useRouter } from 'next/navigation'

const OrderStatus = () => {
  const { replace } = useRouter()
  const pathname = usePathname()

  const statuses: CategoryProp[] = [
    {
      text: 'On-proccess',
      active: Routes.ORDER_PROCCESS === pathname,
      onClick: () => replace(Routes.ORDER_PROCCESS),
    },
    {
      text: 'Completed',
      active: Routes.ORDER_COMPLETED === pathname,
      onClick: () => replace(Routes.ORDER_COMPLETED),
    },
  ]

  return (
    <nav>
      <Categories elements={statuses} />
    </nav>
  )
}

export default OrderStatus
