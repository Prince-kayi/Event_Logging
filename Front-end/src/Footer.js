import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className='foota'>
      <div className='low-foot'>
        <div className="wrap">
          <div className="links">
            <ul>
              <h2>Help Center</h2>
              <li className="link"> <Link to="/faq">FAQ</Link></li>
              <li className="link"> <Link to="/contact-us">Contact Us</Link></li>
              <li className="link"><Link to="/News room">Newsroom</Link></li>
              <li className="link"><Link to="/Feedbacks">Feedbacks</Link></li>
              <li className="link"><Link to="/Volunteer">Volunteer</Link></li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <h2>Patients Care</h2>
              <li className="link"><Link to="/any-prices">Conditions</Link></li>
              <li className="link"><Link to="/competition">Treatments</Link></li>
              <li className="link"><Link to="/beat-price">Specalities</Link></li>
              <li className="link"><Link to="/tech squad">Diagonsis</Link></li>
              <li className="link"><Link to="/install">E-Services</Link></li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <h2>Careers</h2>
              <li className="link"> <Link to="/terms">Overview</Link></li>
              <li className="link"><Link to="/return-policy">Career Choice</Link></li>
              <li className="link"><Link to="/privacy-policy">Sponsorship</Link></li>
              <li className="link"><Link to="/install">Job opportunities</Link></li>
              <li className="link"><Link to="/install">Why choose Us</Link></li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <h2>Research</h2>
              <li className="link"><Link to="/about-us">Overview</Link></li>
              <li className="link"><Link to="/blogs">Research</Link></li>
              <li className="link"><Link to="/money-center">Trials</Link></li>
              <li className="link"><Link to="/credit-services">Research labs</Link></li>
              <li className="link"><Link to="/in-store">Get Involved</Link></li>
            </ul>
            </div>
            <div className="socials">
            <h2>Follow&nbsp;Us&nbsp;On</h2>
            <div className="linkss ">&nbsp;
              <Link to="/facebook"><FaFacebook /></Link>
              <Link to="/twitter"><FaTwitter /></Link>
              <Link to="/instagram"><FaInstagram /></Link>
              <Link to="linkedin"><FaLinkedinIn /></Link>
              <Link to="/youtube"><FaYoutube /></Link>
              <Link to="/youtube"><FaWhatsapp /></Link>
            </div>
          </div>
          </div>
        </div>
        </div>
  )
}

export default Footer
