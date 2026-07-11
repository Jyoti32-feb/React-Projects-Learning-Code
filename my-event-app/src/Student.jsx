import React from 'react'
import { useState } from 'react'
const Student = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    grade: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    setStudent({
      name: "",
      age: "",
      grade: ""
    });
  };

  return (
    <div>
      <h2>Student Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={student.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={student.age} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Grade:
          <input type="text" name="grade" value={student.grade} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Student
