import React from 'react'

const PasswordLengthChecker = () => {
    const [password, setPassword] = React.useState("");
  return (
    <div>
      <h2>Password Length Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Password length: {password.length}</p>
    </div>
  )
}

export default PasswordLengthChecker
