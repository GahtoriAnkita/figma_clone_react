import React from 'react';
import '../App.css';
import pic from '../Components/images/about.jpg';

function About() {
  return (
    <>
    <section className='about' style={{ backgroundImage: `url(${pic})` }}>
    <h1 className='main-heading'>Get the freedom <br /> to be more creative!</h1>
    <p className='para'>Let your imagination soar in the magical world where creativity knows no bounds, where knowledge and expertise interwine to create something truly extraordinary,fostering brillence and enabling new ideas to flourish.</p>
    <button class="custom-btn btn-1">Get Started</button>
  </section>
    </>
  )
}

export default About
