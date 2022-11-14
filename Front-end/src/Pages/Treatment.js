import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Header.css'
import { apiPostCall } from '../Utility';
const Treatment = () => {
  const [resData, setRes] = useState({
    option: " "
  })
  const change = (e) => {
    const answer = { ...resData }
    answer[e.target.name] = e.target.value;
    setRes(answer)
  }
  const display = async() => {
    try {
      let results = await apiPostCall('/treat', resData);
      console.log('Results : ' + results);
    }
    catch (error) {
      console.log(error);
    }
    console.log("results", resData);
  }
  return (
    <div className='ment'>
      <div className='treat-wrap'>
        <form>
          <h1 className='log'>Treatment</h1>
          <div className='res-in'>
            <label> Isoniazid:
              <input type="checkbox"
                name='option'
                value="Isoniazid"
                onChange={change}
              />
            </label>
          </div>
          <div className='res-in'>
            <label>Rifampin:
              <input type="checkbox"
                name='option'
                value=" Rifampin"
                onChange={change}
              />
            </label>
          </div>
          <div className='res-in'>
            <label>Pyrazinamide:
              <input type="checkbox"
                name='option'
                value=" Pyrazinamide"
                onChange={change}
              />
            </label>
          </div>
          <div className='res-in'>
            <label>Ethambutol:
              <input type="checkbox"
                name='option'
                value="Ethambutol"
                onChange={change}
              />
            </label>
          </div>
          <div className='addmit'>
            <button className='four' onClick={display}><Link to="/admit">Admit</Link></button>
            <button className='five'><Link to="/" onClick={display}>LogOut</Link></button>
          </div>
          <p></p>
        </form>
      </div>
    </div>
  )
}
export default Treatment
