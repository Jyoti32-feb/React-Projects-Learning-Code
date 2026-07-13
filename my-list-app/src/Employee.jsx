import React, { useState } from "react";

import './Employee.css'

const Employee = () => {
  // Form State
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    role: "",
    salary: "",
  });

  // Employee List
  const [employees, setEmployees] = useState([]);

  // Edit Mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle Input Change
  function handleChange(e) {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  }

  // Handle Form Submit
  function handleSubmit(e) {
    e.preventDefault();

    // Basic Validation
    if (
      employee.id.trim() === "" ||
      employee.name.trim() === "" ||
      employee.role.trim() === "" ||
      employee.salary.trim() === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    if (isEditing) {
      // Update Employee
      const updatedEmployees = employees.map((currentEmployee) => {
        if (currentEmployee.id === employee.id) {
          return employee;
        } else {
          return currentEmployee;
        }
      });

      setEmployees(updatedEmployees);
      setIsEditing(false);
    } else {
      // Prevent Duplicate ID
      const employeeExists = employees.some(
        (currentEmployee) => currentEmployee.id === employee.id
      );

      if (employeeExists) {
        alert("Employee ID already exists.");
        return;
      }

      // Add Employee
      setEmployees([...employees, employee]);
    }

    // Clear Form
    setEmployee({
      id: "",
      name: "",
      role: "",
      salary: "",
    });
  }

  // Delete Employee
  function handleDelete(id) {
    const updatedEmployees = employees.filter(
      (currentEmployee) => currentEmployee.id !== id
    );

    setEmployees(updatedEmployees);
  }

  // Edit Employee
  function handleUpdate(currentEmployee) {
    setEmployee(currentEmployee);
    setIsEditing(true);
  }
  function handleCancelEdit(){
    setEmployee({
        id:'',
        name:'',
        role:'',
        salary:''
    })
    setIsEditing(false);
  }

  return (
    <div>
      <h1>Employee Management System</h1>

      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={employee.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>ID : </label>
        <input
          type="text"
          name="id"
          placeholder="Enter ID"
          value={employee.id}
          onChange={handleChange}
          disabled={isEditing}
        />
        <br />
        <br />

        <label>Role : </label>
        <input
          type="text"
          name="role"
          placeholder="Enter Role"
          value={employee.role}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Salary : </label>
        <input
          type="number"
          name="salary"
          placeholder="Enter Salary"
          value={employee.salary}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">
          {isEditing ? "Save Employee" : "Add Employee"}
        </button>
        <button onClick={handleCancelEdit}>Cancel</button>
      </form>

      <hr />

      <h2>Total Employees : {employees.length}</h2>

    <div className="table-container">
    <table border="1" cellPadding="10">
        <thead>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Role</th>
                <th>Salary</th>
                <th colSpan="2">Action</th>
            </tr>
        </thead>

        <tbody>
            {employees.map((emp) => (
                <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>{emp.id}</td>
                    <td>{emp.role}</td>
                    <td>{emp.salary}</td>
                    <td>
                        <button onClick={() => handleUpdate(emp)}>Update</button>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(emp.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    </div>
  );
};

export default Employee;