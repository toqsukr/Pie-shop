export type CartPositionProp = {
  id: string
  image: string
  title: string
  price: string
  amount: number
  maxAvailable: number
  onDelete: (id: string) => void
  onIncrement: (id: string) => void
  onDecrement: (id: string) => void
  crust?: string
  extras?: string
}
