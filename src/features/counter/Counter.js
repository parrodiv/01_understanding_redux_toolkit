import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { useState } from 'react'
import { store } from '../../app/store'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  // why state.counter.count?
  // because in store.js there is an object with counter which contains a count property in the state 

  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)

  // if it is not a number, it will be 0
  const addValue = Number(incrementAmount) || 0

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={() => resetAll()}>Reset</button>
      </div>
    </section>
  )
}

export default Counter
