export type CartProduct = {
  id: string
  amount: number
}

export type CartStore = {
  positions: CartProduct[]
  addPosition: (addID: string) => void
  decrementPosition: (id: string) => void
  deletePosition: (deleteID: string) => void
}
