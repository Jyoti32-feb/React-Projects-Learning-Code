import React from 'react'

const MiniIdCard = () => {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [course, setCourse] = React.useState("");
    const [college, setCollege] = React.useState("");
    const [city, setCity] = React.useState("");

    function handleshowdetails() {
        alert(`Name: ${name}\nAge: ${age}\nCourse: ${course}\nCollege: ${college}\nCity: ${city}`);
    }

  return (
    <div>
        <h2>Mini ID Card</h2>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input type="text" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
        <input type="text" placeholder="Enter Course" value={course} onChange={(e) => setCourse(e.target.value)} /><br /><br />
        <input type="text" placeholder="Enter College" value={college} onChange={(e) => setCollege(e.target.value)} /><br /><br />
        <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} /><br /><br />

        <button onClick={handleshowdetails}>Show Details</button>
      
    </div>
  )
}

export default MiniIdCard
