import React from 'react'
import '../Header.css';
import { Link } from 'react-router-dom';
const Default = () => {
    return (
        <div className='homes'>
            <div className='wlcom'>
                <button className='wlcom-btn'>
                    <span className='circle'>
                        <span className='icon arrow'></span>
                    </span>
                    <Link to="/admin"><span className='texts' >Welcome</span></Link>
                </button>
            </div>
        </div>
    )
}
export default Default
