import { StorageKeys } from '@/shared/constants'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartStore } from './type'

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      positions: [{ id: 'pzs-1', amount: 2 }],
      addPosition: position => ({ ...get(), position: [...get().positions, position] }),
      deletePosition: deleteID => ({
        ...get(),
        position: get().positions.filter(({ id }) => id !== deleteID),
      }),
    }),
    {
      name: StorageKeys.CART,
    }
  )
)
