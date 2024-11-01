import Category from '@/shared/ui/category/Category'
import { FC } from 'react'
import css from './OrderInfo.module.scss'
import { OrderInfoProp } from './OrderInfo.type'

const OrderInfo: FC<OrderInfoProp> = ({ id, place, time, total }) => {
  return (
    <div className={css.order}>
      <div>
        <h1>OrderID: #{id}</h1>
        <span>
          {time.getUTCHours()}:{time.getUTCMinutes()}
        </span>
      </div>
      <div>
        <h2>${total}</h2>
        <Category className='!bg-emerald-400 !text-white' text={`Dine-${place.toLowerCase()}`} />
      </div>
    </div>
  )
}

export default OrderInfo
