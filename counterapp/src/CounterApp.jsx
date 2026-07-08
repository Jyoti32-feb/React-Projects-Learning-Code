import React, { useState } from 'react'

function CounterApp() {
    let name="Jyoti";
    let num=0;
    const [count, setCount] = useState(0)

  const plus=() => {
    num++;
    console.log("num : ",num);
    console.log("count : ",count);
    setCount(count + 1);
  }
  const minus=() => {
    if(count<=0){
        alert("Count cannot be less than 0");
    }
    else{
            num--;
            console.log("num : ",num);
            setCount(count - 1);
            console.log("count : ",count);
   
    }
    
  }

  return (
    <div>
      <h2>Counter App....{name}</h2>
      <p>Count: {count}</p>
      <button onClick={plus}>Increment</button><br />
      <button onClick={minus}>Decrement</button><br />
      <button onClick={()=>setCount(0)}>Reset</button><br />

      <h3>Num: {num}</h3>
      <h3>Count: {count}</h3>


    </div>
  )
}

export default CounterApp