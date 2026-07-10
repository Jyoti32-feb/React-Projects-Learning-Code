import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sum from './Sum'
import StudentCard from './StudentCard'
import Multiply from './Multiply'
import Divide from './Divide'
import Substract from './Substract'
import ProfileCard from './ProfileCard'
function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function handleAMultiply() {
    return a*b
  }
  function handleDivide() {
    return a/b
  }
  function handleSubtract() {
    return a-b
  }

  return (
    <>
     <h1>Calculator</h1>
     <p>a:<input type="text" value={a} onChange={(e) => setA(Number(e.target.value))} /><br/><br/>
        b:<input type="text" value={b} onChange={(e) => setB(Number(e.target.value))} /><br/><br/></p>
      

    <Sum a={a} b={b} />
    <Multiply multiply={handleAMultiply} />
    <Divide divide={handleDivide} />
    <Substract a={a} b={b} />
    <ProfileCard
    name="Jyoti"
    role="Java Full Stack Developer"
    city="Pune"
    skills={["Java", "React", "Spring Boot"]}
    />


    {/* <StudentCard
    name="Jyoti"
    course="B.E. IT"
    cgpa={8.84}
/>

<StudentCard
    name="Amit"
    course="B.Tech CSE"
    cgpa={9.1}
/> */}
   

    </>
  )
}

export default App
