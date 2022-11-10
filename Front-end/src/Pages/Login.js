import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './page.css';
import axios from "axios"
const Login = () => {
  const [Login, setLogin] = useState({
    patient_Id: "",
    vital_Readings: " "
  })
  const handleChange = (e) => {
    const Data = { ...Login }
    Data[e.target.name] = e.target.value;
    setLogin(Data)
  }
  const Outcome = () => {
    console.log("Patients Details", Login)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='iss'>
      <div className='login-wrap'>
        <form onSubmit={handleSubmit}>
          <h1 className='log'>Patient</h1>
          <div className='log-in'>
            <label> Patients ID:</label>
            <input type="text"
              name='patient_Id'
              autoComplete='off'
              value={Login.patient_Id}
              onChange={handleChange}
              placeholder='Enter Patients Id'
            />
          </div>
          <div className='log-in'>
            <label>Vital Readings: </label>
            <input type="text"
              name='vital_Readings'
              autoComplete='off'
              value={Login.vital_Readings}
              onChange={handleChange}
              placeholder="Enter_Vital_Readings"
            />
          </div>
          <div className='acces'>
            <button className='fives'><Link to="/type" onClick={Outcome}>Diagonsis</Link></button>
            <button className='sixs'><Link to="/treat" onClick={Outcome}>Treatment</Link></button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
