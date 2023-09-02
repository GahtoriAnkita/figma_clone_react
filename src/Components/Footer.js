import React from 'react'
import '../App.css';
import pic from '../Components/images/photo2.png';

function Footer() {
  return (
    <>
      <section className='Footer'>
        {/*<h4 style={{ color: "white", fontFamily: "Pacifico, cursive", fontSize: "40px" }}>Creatvise</h4>*/}
        <img src={pic} alt="" style={{ marginTop: "20px" }} />
        <h4>Empowering Curators, Enriching Prespectives</h4>
        <div class="search-bar">
          <input type="text" placeholder="Email" style={{ borderRadius:"20px", height: "45px",width:"350px",border: "1px solid white" }} />
          <button className='radius' style={{ width: "100px", height: "42px",border: "1px solid white" }}>notify me</button>
        </div>
        <div class="social-icons">
          <a href="/"><i class="fab fa-instagram instagram-icon"></i></a>
          <a href="/"><i class="fab fa-facebook facebook-icon"></i></a>
          <a href="/"><i class="fab fa-linkedin linkedin-icon"></i></a>
          <a href="/"><i class="fab fa-pinterest pinterest-icon"></i></a>
          <a href="/"><i class="fab fa-twitter twitter-icon"></i></a>
        </div>
        <div class="copyright">
          &copy; 2023 Creatvise, All rights reserved.
        </div>
      </section>
    </>
  )
}

export default Footer
