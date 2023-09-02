import React from 'react'
import '../App.css';
import desktop from '../Components/images/photo1.png';
import { Icon } from '@iconify/react';


function Home() {
  return (
    <>
      <section className='head'>
        <p className='heading'>Empowering Curators, Enriching Perspectives</p>
        <p className='content'>Welcome to Creatvise! Unleashing the power of curation. We empower curators worldwide, providing them with a robust to showcase their expertise and amplify their impact. We believe in the power of curation and helps in turning a prespective into reality.</p>
        <button class="custom-btn btn-1">Get Started</button>
      </section>

      {/*<section className="container">
        <div className="text-section" style={{ marginRight: "0px" }}>
        <h1 style={{ marginLeft: "-100px", marginBottom: "50px", marginTop: "50px", color: "rgb(94, 98, 237)" }}>Unleash your creativity in your curative zone !</h1>
        <p style={{ marginLeft: "-100px", marginBottom: "40px", marginTop: "40px", color: "#6A5ACD" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam voluptatum minima nesciunt sit magni eligendi cupiditate ea cum! Soluta architecto velit nam minima, quaerat fugiat inventore eligendi quidem possimus explicabo fugit voluptatem ut voluptates quasi maxime repellat eius blanditiis assumenda perspiciatis ipsam vel animi minus ex!</p>
        <span style={{ color: "#4b0082", fontSize: "20px", marginLeft: "-100px", fontWeight: "700" }}>Explore Now </span>
        <Icon icon="mdi:arrow-right-thin" color="#1f0558" width="90" height="40" style={{ marginLeft: "-20px" }} />
        </div>
        <div className="image-section">
        <img src={desktop} className='photo' style={{ height: "15cm",width:"15cm", marginTop: "30px" }} alt="Description" />
        </div>
  </section>*/}

      <div className='section'>
        <div className='text'>
        <h1 className='head1'>Unleash your creativity in your curative zone !</h1>
        <p className='para1'>Wheather you are a creative enthusiast or a professional designer, Creative zone is the first browser based design tools that allows to create stunning graphics with more user friendly experience. It has the power of stiching your .psd(Photoshop) and .ai (illustrator) files with intuitive features to meet all your design needs. This tool priorities user-friendliness and aims to provide a seamless and enjoyable design experience like never before.</p>
        <span style={{ color: "rgb(84,84,188) ", fontSize: "22px", fontWeight: "700" }}>Explore Now!</span>
        <Icon icon="mdi:arrow-right-thin" color="rgb(84,84,188) " width="100" height="40" style={{ marginLeft: "-20px" }} />
        </div>
        <div className='image'>
        <img src={desktop} alt="desktop" className='photo'/> </div>
        </div>
    </>
  )
}

export default Home
