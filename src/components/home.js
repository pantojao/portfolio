import React from 'react';
import {useHistory} from 'react-router-dom' 

function Home (){
    const history = useHistory()
    const openSocial = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        
        <div className ="hero">
            <div className="intro-box">
                <h1>Joel Pantoja</h1>
                <h2>Web Developer</h2>
            </div>

            <div className="nav-buttons">
                <button className="nav-button btn" onClick={() => history.push('/projects')}>Projects</button>
                <button className="nav-button btn" onClick={() => openSocial('mailto:joelpantojaortega@gmail.com')}>Contact</button>
                <button className="nav-button btn" onClick={() => history.push('/resume')}>Resume</button>
            </div>

            <div className="socials">
                <img className="social" onClick={() => openSocial('https://www.linkedin.com/in/joel-pantoja-730b99127/')}  style = {{marginRight: "1.5em"} }src = {require('../media/linkedin.png')} alt=""/>
                <img className="social" onClick={() => openSocial('https://github.com/pantojao')}  src = {require('../media/github.png')} alt=""/>
            </div>
        </div>
    )
}


export default Home;