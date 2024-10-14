import { HTMLAttributes } from 'react'

export type CounterProp = {
  value: number
  increment: (value: number) => void
  decrement: (value: number) => void
} & HTMLAttributes<HTMLDivElement>
