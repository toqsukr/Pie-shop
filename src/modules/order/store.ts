import { create } from 'zustand'
import { OrderStore } from './type'

export const useOrder = create<OrderStore>((set, get) => ({
  orders: [],
  createOrder: () => {},
}))
