import ControlLayout from '@/layouts/ControlLayout'
import { FC, PropsWithChildren } from 'react'

const OrderLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ControlLayout control={<div />} children={children} />
}

export default OrderLayout
