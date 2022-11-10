import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './page.css';
import { apiPostCall } from '../Utility';
const Admin = () => {
  const [AdMin, setAdmin] = useState({
    adminId: " ",
  })
  const HandlerChange = (e) => {
    const data = { ...AdMin };
    data[e.target.name] = e.target.value;
    setAdmin(data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const Show = async () => {
    try {
      let results = await apiPostCall('http://localhost:1789/api/admin', AdMin);

      console.log('Results : ' + results);
    }
    catch (error) {
      console.log(error);
    }
    console.log("results", AdMin);
  }
  return (
    <div className='pipo'>
      <div className='admin-container'>
        <div className='admin-wrap'>
          <form onSubmit={handleSubmit}>
            <h1 className='id'>Admin ID</h1>
            <div className='sing-in'>
              <input type="text"
                name='adminId'
                placeholder='enter Admin Id'
                value={AdMin.adminId}
                onChange={HandlerChange}
              />
            </div>
            <div className='access'>
              <button className='login' onClick={Show}><Link to="/login"> Admin Login</Link></button>
              <button className='sign'><Link to="/register">Sign Up</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
     }
export default Admin
