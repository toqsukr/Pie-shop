import { HTMLAttributes } from 'react'

export type CategoryProp = {
  text: string
  emoji?: string
  active?: boolean
} & HTMLAttributes<HTMLButtonElement>
