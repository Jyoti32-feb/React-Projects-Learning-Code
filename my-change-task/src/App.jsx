import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Name from './Name'
import './App.css'
import ColorChanger from './ColorChanger'
import Counter from './Counter'
import CricketScore from './CricketScore'
import VolumeController from './VolumeController'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Name />
      <ColorChanger />
      <Counter />
      <CricketScore />
      <VolumeController />
    </>
  )
}

export default App
