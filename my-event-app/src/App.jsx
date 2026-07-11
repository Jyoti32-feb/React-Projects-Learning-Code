import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'

function App() {
  const [uname, setName] = useState("");
  const[emp, setEmp] = useState({
    empname: "",
    empage: "",
    empsalary: ""})
  function handleClick() {
    alert("Button clicked!");
  }
  function handlePrintName(name){
    console.log("hello...",name);
  }
  function handlePrintUname(tag){
    console.log(tag.target);
    console.log(tag.target.name);
    console.log(tag.target.type);
    console.log(tag.target.value);
    //setName(tag.target.value);
  }
  // function handlePrintEmpname(tag){
  //   setEmp({...emp, empname: tag.target.value});
  //   // console.log(emp);
  //   // console.log(emp.empname);
  // }
  // function handlePrintEmpage(tag){
  //   setEmp({...emp, empage: tag.target.value});
  //   console.log(emp);
  //   console.log(emp.empage);
  // }
  // function handlePrintEmpsalary(tag){
  //   setEmp({...emp, empsalary: tag.target.value});  
  //   console.log(emp);
  //   console.log(emp.empsalary);
  // }
  function handlePrintEmpdetails(tag){
    alert(`Name: ${emp.empname}\nAge: ${emp.empage}\nSalary: ${emp.empsalary}`);
  }

  function handleInputs(tag){
    setEmp({...emp, [tag.target.name]: tag.target.value});
    
  }
  function handleSubmit(tag){
    tag.preventDefault();
    handlePrintEmpdetails(tag);
    setEmp({
      empname: "",
      empage: "",
      empsalary: ""})
  }

  return (
    
    <div className="App">
      <p><strong>Employee Details</strong></p>
      <form onSubmit={handleSubmit}>
        Emp Name : <input type="text" name="empname" placeholder="Name" value={emp.empname} onChange={handleInputs} /><br /><br />
        Emp Age : <input type="text" name="empage" placeholder="Age" value={emp.empage} onChange={handleInputs} /><br /><br />
        Emp Salary : <input type="text" name="empsalary" placeholder="Salary" value={emp.empsalary} onChange={handleInputs} /><br /><br />
        <button type="submit">Submit</button>
      </form>
      <Student />

      {/* <input type="text" name="uname" value={uname} onChange={handlePrintUname} /><br /><br />
      <p>Name: {uname}</p><br /><br />
      <button onClick={handleClick}>
        Click me!
      </button><br /><br />
      <button onClick={() => handlePrintName("John")}>Print Name</button> */}
    </div>
  )
}

export default App
