import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Mohammad Suhail</b> and I am from Lucknow, India.
            I'm a <b>Frontend web developer</b> and i recently completed my <b>Bachelor of computer application</b>. <br/><br/>
            Alongside my frontend development skills, I have hands-on experience in <b>search engine optimization</b>, having completed a 4-month internship at Logilite Pvt. Ltd. I am passionate about creating visually appealing, responsive websites and optimizing them for better search engine visibility. <br /><br />I am currently seeking opportunities to further develop my skills and contribute to impactful projects."
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
           
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='HTML5' />
        <Skills skill='Css3' />
        <Skills skill='React' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About