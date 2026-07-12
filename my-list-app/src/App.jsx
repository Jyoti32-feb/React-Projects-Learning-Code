import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //  const[name , setname]=useState('');
  //  const[city,setcity]=useState('');

  //  function handleName(e){
  //   setname(e.target.value);
  //   console.log(e.target.value);

  //  }
  //  function handleCity(e){
  //   setcity(e.target.value);
  //  }

  const[employee,setemployee]=useState({
    name:'',role:'',city:''
  });
  function handleChange(e){
    const{name,value}=e.target
    setemployee({
      ...employee,[name]:value
    })
  }
   

  return (
    
    <>
      <h4>Name : <input type="text" name="name" value={employee.name} onChange={handleChange} /></h4>
      <h4>Role : <input type="text" name="role" value={employee.role} onChange={handleChange} /></h4>
      <h4>City : <input type="text" name="city" value={employee.city} onChange={handleChange} /></h4>
      <h3>Name : {employee.name}</h3>
      <h3>City : {employee.city}</h3>
      <h3>Role : {employee.role}</h3>
      <h4>Total length of characters : {employee.name.length}</h4>
    </>
  )
}

export default App
