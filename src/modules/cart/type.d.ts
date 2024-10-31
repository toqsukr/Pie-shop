export type CartProduct = {
  id: string
  amount: number
}

export type CartStore = {
  positions: CartProduct[]
  addPosition: (position: CartProduct) => void
  deletePosition: (deleteID: string) => void
}
