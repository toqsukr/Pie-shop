import { useMenu } from '@/modules/menu/store'
import { CartStore } from '../type'

export const incrementPosition = (store: CartStore, id: string) => {
  const { getAllMenu } = useMenu.getState()
  const product = getAllMenu().find(product => product.id === id)

  return {
    ...store,
    positions: store.positions.map(position =>
      position.id === id
        ? {
            ...position,
            amount:
              product && position.amount + 1 <= product.maxAvailable
                ? position.amount + 1
                : position.amount,
          }
        : position
    ),
  }
}
