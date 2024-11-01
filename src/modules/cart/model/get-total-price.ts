import { useMenu } from '@/modules/menu/store'
import { CartProduct } from '../type'

export const getTotalPrice = (positions: CartProduct[]) => {
  const { getAllMenu } = useMenu.getState()

  const totalPrice = positions.reduce((accum, curr) => {
    const productPrice = getAllMenu().find(({ id }) => curr.id === id)?.price ?? 0
    return +(accum + +productPrice * curr.amount).toFixed(2)
  }, 0)

  return totalPrice
}
