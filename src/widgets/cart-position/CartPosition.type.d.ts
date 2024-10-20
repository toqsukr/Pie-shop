export type CartPositionProp = {
  id: string
  image: string
  title: string
  price: string
  amount: number
  maxAvailable: number
  onEdit: () => void
  onIncrement: () => void
  onDecrement: () => void
  crust?: string
  extras?: string
}
