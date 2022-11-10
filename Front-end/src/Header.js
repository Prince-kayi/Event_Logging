import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
const Header = () => {
  return (
    <nav>
      <div className='wrap'>
        <div className='logo'>
          <ul>
            <li className='actives'><Link to="/">Medical Center</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
