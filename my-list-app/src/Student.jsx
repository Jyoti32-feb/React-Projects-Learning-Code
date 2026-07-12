import React from 'react'
import { useState } from 'react'

const Student = () => {
   const students = [
        { id: 1, name: "Jyoti", city: "Pune" },
        { id: 2, name: "Rahul", city: "Mumbai" },
        { id: 3, name: "Amit", city: "Nagpur" }
    ];


  return (
    <div>
      <h1>Student list</h1>
      {
       students.map((student)=>(
        <div Key={student.id}>
            <h3> 
                👤 {student.name}</h3>
            <p>{student.id}</p>
            <p>
               📍{student.city}</p>
            </div>
       )
       
    )
    
      }
    </div>
  )
}

export default Student
