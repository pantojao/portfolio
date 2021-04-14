import React from 'react'
import ExitIcon from '../subcomponents/exit'

function About() {
  return (
    <div className="section-background">
      <div className="section-top">
        <h2 className="section-header">About</h2>
        <ExitIcon/>
      </div>
      <div className="content">
        <img src={require('../media/myPhoto.jpg')} style ={{width: "200px",  borderRadius: "100px", outline: "2px red solid"}} alt="Myself" />
        
        <h1 style= {{fontSize: "1rem", marginLeft: "1em"}}>  Who Am I? </h1><br/>
        <h1 style= {{fontSize: "1rem", marginLeft: "1em"}}>  What Techonolgies?</h1><br/>
        <h1 style= {{fontSize: "1rem", marginLeft: "1em"}}>  when? </h1><br/>
        <h1 style= {{fontSize: "1rem", marginLeft: "1em"}}>  why ? </h1><br/>
      
    

      </div>
    </div>
  )
}

export default About 