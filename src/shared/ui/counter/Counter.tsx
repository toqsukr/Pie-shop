import { FC } from 'react'
import css from './Counter.module.scss'
import { CounterProp } from './Counter.type'

const Counter: FC<CounterProp> = ({ value, increment, decrement }) => {
  return (
    <div className={css.counter}>
      <button onClick={() => decrement(value - 1)}>-</button>
      {value}
      <button onClick={() => increment(value + 1)}>+</button>
    </div>
  )
}

export default Counter
