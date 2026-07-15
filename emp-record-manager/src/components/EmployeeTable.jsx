import React from 'react'

const EmployeeTable = ({employees}) => {
  return (
    <div>
       {
        employees.map((emp)=>(
            <h2>{emp.name}</h2>
        ))
       }
      
    </div>
  )
}

export default EmployeeTable
