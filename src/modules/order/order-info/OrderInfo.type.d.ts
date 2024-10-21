import { Order } from '../type'

export type OrderInfoProp = Omit<Order, 'status'>
