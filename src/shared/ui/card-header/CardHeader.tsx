import { FC } from 'react'
import { CardHeaderProp } from './CardHeader.type'

const CardHeader: FC<CardHeaderProp> = ({ text, ...props }) => {
  return (
    <h6 {...props} style={{ fontSize: '1.3rem' }}>
      <strong>{text}</strong>
    </h6>
  )
}

export default CardHeader
