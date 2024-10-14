import { LinkProps } from 'next/link'
import { HTMLAttributes } from 'react'

export type NavItemProp = {
  icon: ReactNode
  text: string
  active?: boolean
  linkProps: LinkProps
} & HTMLAttributes<HTMLDivElement>
