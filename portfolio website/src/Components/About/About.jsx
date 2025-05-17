import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
//import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                    I am a Computer Science major at Occidental College from Los Angeles, CA.
                    I have experience in making websites using Python + Flask and Javascript + React. I have made working websites that are 
                    currently in use by faculty at Occidental College in order to facilitate course scheduling amongst
                    departments before finalizing them at the registrar.
                </p>
                <p>

                </p>
            </div>


            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Javascript</p><hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Python</p><hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Flask</p><hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                    <p>MySQL</p><hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                    <p>SQLAlchemy</p><hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Java</p><hr style={{width: "50%"}}/>
                </div>

            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
