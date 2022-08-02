import React, { Component } from 'react'
import Navbarr from './Navbarr'
import Profile from './Profile'
import About from './About'
import Skills from './Skills'
import Experiences from './Experiences'
import Educations from './Educations'
import Portfolios from './Portfolios'
import "../styles/ScrollIndicator.css"

const Home = () => {
  return (
            <section>
                

                    
                <Navbarr />
                <div className='progressMainWrapper'>
                    <div className="progressMainStyle">
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