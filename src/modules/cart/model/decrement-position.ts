import { CartStore } from '../type'

export const decrementPosition = (store: CartStore, id: string) => {
  return {
    ...store,
    positions: store.positions.map(position =>
      position.id === id ? { ...position, amount: position.amount - 1 } : position
    ),
  }
}
