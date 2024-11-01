import { CartStore } from '../type'

export const addPosition = (store: CartStore, id: string) => {
  return {
    ...store,
    positions: [...store.positions, { id, amount: 1 }],
  }
}
