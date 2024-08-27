import React from 'react';
import ProjectBox from './ProjectBox';
import jokeimage from '../images/jokeimage.png';
import newsimage from '../images/newsimage.jpg';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={newsimage} projectName="NewsHippo" />
        <ProjectBox projectPhoto={jokeimage} projectName="Random_Jokes_Generator" />
       
       
      </div>

    </div>
  )
}

export default Projects