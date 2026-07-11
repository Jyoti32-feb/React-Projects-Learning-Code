import { useState } from "react";




function Name() {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const changeName = (e) => {
        setName(e.target.value);
    }
    
    
  return (
    <div>

      <h3>Name:</h3>
      <input type="text"
      value={name}
      onChange={changeName}
      />

      
      <h3>Course:</h3>
      <input type="text"
      value={course}
      onChange={(e) => setCourse(e.target.value)}
      />

      <br />

     

      <p>My name is {name}</p>

      <p>My course is {course}</p>

      <p>The total length of your name and course is {name.length + course.length}</p>
    </div>
  );
}
export default Name;