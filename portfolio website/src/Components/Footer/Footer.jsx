import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <p>I am a current college student at Occidental with experience making websites using Python + Flask and JS + React. I also have experience using databases such as MySQL and SQLAlchemy.</p>
        </div>
        {/* <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt=""/>
                <input type='email' placeholder='Enter your email'></input>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom" style={{ marginBottom: '50px' }}>
        <p className="footer-bottom-left"  >Matthew Arboleda</p>
      </div>
      {/* <div className="footer-bottom-right">
        <p>Connect with me</p>

      </div> */}
    </div>
  )
}

export default Footer
