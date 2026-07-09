import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    role: "",
    grossSalary: "",
    pf: "",
    insurance: ""
});

const [employees, setEmployees] = useState([]);


  return (
    <>
      <input
    type="text"
    placeholder="Enter Name"
    value={employee.name}
    onChange={(e) => setEmployee({ ...employee, name: e.target.value })}

  />
  <input type="number"
   placeholder="Enter id" 
   value={employee.id}
   onChange={(e) => setEmployee({ ...employee, id: e.target.value })} />
   
   <input type="text"
    placeholder="Enter Role"
    value={employee.role} 
    onChange={(e) => setEmployee({ ...employee, role: e.target.value })} />

    <input type="number"
    placeholder="Enter Gross Salary"
    value={employee.grossSalary}
    onChange={(e) => setEmployee({ ...employee, grossSalary: e.target.value })} />

    <input type="number"
    placeholder="Enter PF"
    value={employee.pf}
    onChange={(e) => setEmployee({ ...employee, pf: e.target.value })} />

    <input type="number"
    placeholder="Enter Insurance"
    value={employee.insurance}
    onChange={(e) => setEmployee({ ...employee, insurance: e.target.value })} />
    
    

   
   
   
   
   
    </>
  )
}

export default App
