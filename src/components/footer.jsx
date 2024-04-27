import React from 'react'
import Instagram from '../footer logos/instagram.png';
import Facebook from '../footer logos/facebook.png';
export default function Footer() {
  return (
    <div>
        <div className='footer-box'>
            
           <h3 className='footer-rights'>Copyrights © 2024 - Blogger-X</h3>

            <div className='social-box'>
             <a href='https://www.instagram.com/am_the_ragu_s'><img src = { Instagram } width={30} height={30} /></a>
             
             <a href='https://www.facebook.com/profile.php?id=100017810948293&mibextid=ZbWKwL'><img src = { Facebook } width={30} height={30} /></a>
             
        
            </div>

            
        </div>
    </div>
  )
}
