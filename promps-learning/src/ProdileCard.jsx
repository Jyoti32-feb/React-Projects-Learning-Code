import React from 'react'

const ProfileCard = ({ name, role, city, skills }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{city}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProdileCard;
