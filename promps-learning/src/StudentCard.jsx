import React from 'react'

const StudentCard = ({ name, course, cgpa }) => {
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>CGPA:</strong> {cgpa}</p>
    </div>
  )
}

export default StudentCard
