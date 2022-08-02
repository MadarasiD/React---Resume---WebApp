import React, { useState, useEffect } from 'react'
import Navbarr from './Navbarr'
import Profile from './Profile'
import About from './About'
import Skills from './Skills'
import Experiences from './Experiences'
import Educations from './Educations'
import Portfolios from './Portfolios'
import "../styles/ScrollIndicator.css"

const Home = () => {
    const [ scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = ( winScroll / height) * 100;

        setScrollTop(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, []);
  return (
            <section>
                

                    
                <Navbarr />
                <div className='progressMainWrapper'>
                    <div className="progressMainStyle" style={{width: `${scrollTop}%`}}>
                    </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m3">
                            <Profile />
                            </div>
                            
                        </div>
                            <div className="col s12 m9">
                                <About />
                                <Skills />
                                <Experiences />
                                <Educations />
                                <Portfolios />
                            </div>
                    
                    </div>
            </section>
  )    
    
}
  


export default Home