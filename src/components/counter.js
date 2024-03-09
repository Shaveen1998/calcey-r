import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/reducers/counterSlice'

function Counter() {

    const {count} = useSelector(state=>state.count)
    const dispatch = useDispatch()

    const handleIncrement = ()=>{
        dispatch(increment())
    }

    const handleDecremet = ()=>{
        dispatch(decrement())
    }

  return (
    <div>
      <h1>Counter</h1>
      <h4>{count}</h4>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecremet}>-</button>
    </div>
  )
}

export default Counter
