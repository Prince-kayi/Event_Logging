import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiPostCall } from '../Utility';
const Register = () => {
  const [registers, setRegisters] = useState({
    practitionerId: " ",
    name: " ",
    surname: " ",
    jobDescription: " "
  })
  const handle = (e) => {
    const info = { ...registers }
    info[e.target.name] = e.target.value;
    setRegisters(info)
  }
  const Submitted = (e) => {
    e.preventDefault();
  }
  const getResults = async () => {
    try {
      let results = await apiPostCall('http://localhost:1789/api/register', registers);

      console.log('Results : ' + results);
    }
    catch (error) {
      console.log(error);
    }
    console.log("results", registers);
  }
  return (
    <div className='star'>
      <div className='register-wrap'>
        <form onSubmit={Submitted}>
          <h1 className='regi'>Sign Up</h1>
          <div className='reg-in'>
            <label> Health Practitioner ID: </label>
            <input type="text"
              name='practitionerId'
              value={registers.practitionerId}
              onChange={handle}
              placeholder='Enter Health Practitioner Id'
            />
          </div>
          <div className='reg-in'>
            <label>Name:</label>
            <input type="text"
              name='name'
              value={registers.name}
              onChange={handle}
              placeholder='Enter Name'
            />
          </div>
          <div className='reg-in'>
            <label>Surname:  </label>
            <input type="text"
              name='surname'
              value={registers.surname}
              onChange={handle}
              placeholder='Enter Surname'
            />
          </div>
          <div className='reg-in'>
            <label>Job Description: </label>
            <input type="text"
              name='jobDescription'
              value={registers.jobDescription}
              onChange={handle}
              placeholder='Enter Job Description'
            />
          </div>
          <div className='acce'>
            <button className='sign-btn' onClick={getResults}><Link to="/admin">Sign UP</Link></button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register
