import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import EmployeeTable from './components/EmployeeTable'

function App() {

  const employees = [
    {
        id:101,
        name:"Jyoti",
        role:"Developer",
        salary:50000
    },
    {
        id:102,
        name:"Rahul",
        role:"Tester",
        salary:40000
    }
];


  return (
    <>
    <EmployeeTable employees={employees}/>
    </>
  )
}

export default App
