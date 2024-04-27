import React from 'react'
import AI from '../images/AI.jpg';
export default function HeadSection() {
  return (
    
    <div className='head-container'>
     
     <img src= { AI } className='head-image' width={ 200 } height={ 200 }/>

     <div className='head-content'>
        <h2>The Real Truth About Devin AI</h2>
        <p>Subsequently The Facts That Describe The Devin To Replace Humans.</p>
        <button className='head-btn'>Know More</button>
     </div>
         
    </div>
  )
}
