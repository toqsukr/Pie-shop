import { HTMLAttributes } from 'react'

export type CounterProp = {
  value: number
  increment: () => void
  decrement: () => void
} & HTMLAttributes<HTMLDivElement>
