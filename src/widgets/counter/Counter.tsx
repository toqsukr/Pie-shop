import { FC } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { FiMinus } from 'react-icons/fi'
import ActionArea from '../../shared/ui/action-area/ActionArea'
import css from './Counter.module.scss'
import { CounterProp } from './Counter.type'

const Counter: FC<CounterProp> = ({ value, increment, decrement }) => {
  return (
    <div className={css.counter}>
      <ActionArea onClick={decrement}>
        <FiMinus />
      </ActionArea>
      {value}
      <ActionArea onClick={increment}>
        <FaPlus />
      </ActionArea>
    </div>
  )
}

export default Counter
