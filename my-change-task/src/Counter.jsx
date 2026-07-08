import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>

      <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

    </div>
  )
}

export default Counter
