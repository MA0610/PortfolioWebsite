import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ProfilePic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I'm Matthew Arboleda,</span> a Computer Science major from Occidental College</h1>
      <p>I am have experience in making websites using JS and React as well as Python and Flask. I hope to be able to contribute towards projects in software and website development.</p>


      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"> <a href="../../public/Matthew Arboleda Resume.pdf" download><button className="resume-btn">My resume</button></a></div>
      </div>

    </div>
  )
}

export default Hero
