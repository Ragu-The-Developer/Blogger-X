import React from 'react'
import Github from '../profile img/github.png';
import Linkedin from '../profile img/linkedin.png';
import Profilepic from '../profile img/profile-pic.png';
export default function Profile() {
  return (
    <div class="profile-container">
    <div class="profile-img">
        <img src= { Profilepic } alt="Profile Image" width={100} height={100} />
    </div>
    <div class="profile-info">
        <div class="author-name">Ragunathan-S</div>
        <div class="title">Web Developer / UI/UX</div>

        <div className='socials'>
        <a href='https://github.com/Ragu-The-Developer/Ragu-The-Developer'><img src={ Github} width={30} height={30}/></a>
        <a href='https://www.linkedin.com/in/ragunathan-s-112306203/'><img src={ Linkedin } width={30} height={30}/></a>
        </div>

    </div>
</div>
  )
}
