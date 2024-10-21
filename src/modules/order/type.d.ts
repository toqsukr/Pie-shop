export type Order = {
  id: number
  time: Date
  total: string
  status: OrderStatus
  place: OrderPlace
}

export type OrderStatus = 'PROCCESS' | 'COMPLETED'

export type OrderPlace = 'IN' | 'OUT'
