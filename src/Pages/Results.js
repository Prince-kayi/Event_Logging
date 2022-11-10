import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Header.css'
const Results = () => {
  const [resData, setRes] = useState({
    option: " "
  })
  const change = (e) => {
    const answer = { ...resData }
    answer[e.target.name] = e.target.value;
    setRes(answer)
  }
  const display = () => {
    console.log("results", resData.option)
  }
  return (
    <div className='ults'>
      <div className='treati-wrap'>
        <form>
          <h1 className='log'>Diagonsis Results</h1>
          <div className='ress-in'>
            <label> Infected:
              <input type="checkbox"
                name='option'
                value="Infected"
                onChange={change}
              />
            </label>
          </div>
          <div className='ress-in'>
            <label>Not Infected:
              <input type="checkbox"
                name='option'
                value=" Not Infected"
                onChange={change}
              />
            </label>
          </div>
          <div className='ress-in'>
            <label>Latent TB:
              <input type="checkbox"
                name='option'
                value=" Latent TB"
                onChange={change}
              />
            </label>
          </div>
          <div className='ress-in'>
            <label>TB diseases:
              <input type="checkbox"
                name='option'
                value="TB diseases"
                onChange={change}
              />
            </label>
          </div>
          <div className='addmit'>
            <button className='four' onClick={display}><Link to="/admit">Admit</Link></button>
            <button className='five'><Link to="/admin">LogOut</Link></button>
            <button className='six'><Link to="/treat" onClick={display}>Treatment</Link></button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Results
