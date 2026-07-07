import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  let name ="Jyoti"
  let num=10;
  let num2=3;
  let digit=35124;
  let count=0;
  while(digit>0){
    let rem=digit%10;
    count++;
    digit=Math.floor(digit/10);

  }

  return (
    <div className="App">
      <h1>My First React App...hello from React!</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Num1:</strong> {num}</p>
      <p><strong>Num2:</strong> {num2}</p>
      <h2>Airthmatic Operations : </h2>
      <p><strong>Sum:</strong> {num+num2}</p>
      <p><strong>Sub:</strong> {num-num2}</p>
      <p><strong>Mul:</strong> {num*num2}</p>
      <p><strong>Div:</strong> {num/num2}</p>

      <p><strong>Number of digits:</strong> {count}</p>
      

    </div>
  )
}

export default App
