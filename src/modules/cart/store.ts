import { StorageKeys } from '@/shared/constants'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addPosition } from './model/add-position'
import { decrementPosition } from './model/decrement-position'
import { deletePosition } from './model/delete-position'
import { getTotalPrice } from './model/get-total-price'
import { incrementPosition } from './model/increment-position'
import { CartStore } from './type'

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      positions: [],
      addPosition: addID => {
        const existing = get().positions.find(position => position.id === addID)
        if (existing) {
          set(incrementPosition(get(), addID))
        } else {
          set(addPosition(get(), addID))
        }
      },
      decrementPosition: id => {
        set(decrementPosition(get(), id))
      },
      deletePosition: deleteID => {
        set(deletePosition(get(), deleteID))
      },
      getTotalPrice: () => getTotalPrice(get().positions),
    }),
    {
      name: StorageKeys.CART,
    }
  )
)
