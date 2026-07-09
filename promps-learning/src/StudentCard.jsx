import React from 'react'

const StudentCard = ({ name, course, cgpa }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>CGPA: {cgpa}</p>
    </div>
  )
}

export default StudentCard
