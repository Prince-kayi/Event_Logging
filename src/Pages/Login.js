import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiPostCall } from '../Utility';
import './page.css';
const Login = () => {
  const [Login, setLogin] = useState({
    patientId: "",
    vitalReadings: " "
  })
  const handleChange = (e) => {
    const Data = { ...Login }
    Data[e.target.name] = e.target.value;
    setLogin(Data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const Outcome = async () => {
  try {
    let results = await apiPostCall('/login', Login);
    console.log('Results : ' + results);
  }
  catch (error) {
    console.log(error);
  }
  console.log("results", Login);
}
  
  return (
    <div className='iss'>
      <div className='login-wrap'>
        <form onSubmit={handleSubmit}>
          <h1 className='log'>Patient</h1>
          <div className='log-in'>
            <label> Patients ID:</label>
            <input type="text"
              name='patientId'
              autoComplete='off'
              value={Login.patientId}
              onChange={handleChange}
              placeholder='Enter Patients Id'
            />
          </div>
          <div className='log-in'>
            <label>Vital Readings: </label>
            <input type="text"
              name='vitalReadings'
              autoComplete='off'
              value={Login.vitalReadings}
              onChange={handleChange}
              placeholder="Enter_Vital_Readings"
            />
          </div>
          <div className='acces'>
            <button className='fives'><Link to="/type" onClick={Outcome}>Diagonsis</Link></button>
            <button className='six'><Link to="/treat" onClick={Outcome}>Treatment</Link></button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
