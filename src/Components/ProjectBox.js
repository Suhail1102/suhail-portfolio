import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    NewsHippoDesc:"News Hippo is a dynamic website that delivers real-time news updates, crafted using HTML, CSS, JavaScript, Bootstrap, and React for a sleek and responsive user experience.",
    NewsHippoGithub:"https://github.com/Suhail1102/news-hippo",

    Random_Jokes_GeneratorDesc : "This project is based on generate random jokes . In this project i used html , Css, and Javascript and Api for random jokes . i used asynchronous Javascript to fetch the response from an Apito genrate jokes.",
    Random_Jokes_GeneratorGithub : "https://github.com/Suhail1102/Random-Jokes-Generator",
    
   
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

        </div>
    </div>
  )
}

export default  ProjectBox