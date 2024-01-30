import{useState } from 'react'

function Counter() {

    const [count, setCount] =  useState(0)

    const handleIncrement = ()=>{
        setCount(count=>count+1)
    }

    const handleDecremet = ()=>{
        setCount(count=>count-1)
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
