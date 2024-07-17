import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About(){
    return(
        <>
          <Navbar/>
          <Hero cName="hero-mid" heroImg="https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmlnaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" title="About"/>
          <AboutUs/>
          <Footer/>
        </>
    )
}

export default About;