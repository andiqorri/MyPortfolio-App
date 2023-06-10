import React from 'react'
import './Footer.css'



const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
                <img src="./image/andlogoweb.png"  alt="" width={120}/>    
                <span className="secondaryText">
                My vision is to make all people <br />
                the best place to live for them.
                </span>
        </div>


        <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>Prishtine, 10000, Bedri Shala <br/>
            + 383 49 164 486    
            </span>
        
        <div className="flexCenter f-menu">
                <span>Quotes</span>
                <span>Dreams</span>
                <span>Projects</span>
                <span>About ANDI</span>
            </div>
        </div>
    </div> 
   </section>
  )
}

export default Footer