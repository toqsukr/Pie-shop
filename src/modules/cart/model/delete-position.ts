import { CartStore } from '../type'

export const deletePosition = (store: CartStore, id: string) => {
  return {
    ...store,
    positions: store.positions.filter(position => position.id !== id),
  }
}
