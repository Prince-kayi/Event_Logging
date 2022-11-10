import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './page.css';
const Types_Diagonsis = () => {
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
    <div className='nosis'>
      <div className='type-wrap'>
        <form>
          <h1 className='log'>Types of Diagonsis</h1>
          <div className='treat-btn'>
            <div className='res-in'>
              <label> TST(Skin test):
                <input type="radio"
                  name='option'
                  value="TST(Skin test)"
                  onChange={change}
                />
              </label>
            </div>
            <div className='res-in'>
              <label>TB Blood Test:
                <input type="radio"
                  name='option'
                  value="TB Blood Test"
                  onChange={change}
                />
              </label>
            </div>
            <div className='res-in'>
              <label>X-ray:
                <input type="radio"
                  name='option'
                  value="X-ray"
                  onChange={change}
                />
              </label>
            </div>
          </div>
          <div className='addmit'>
            <button className='four'><Link to="/admit">Admit</Link></button>
            <button className='five'><Link to="/results" onClick={display}>Results</Link></button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Types_Diagonsis
