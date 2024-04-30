import React from 'react'

export default function joinsection() {
  return (
    <div className="newsletter">
      <h1 className='news-title'>Subscribe to Newsletter</h1>
      <form className='form-panel' method="post" >
        <input
          type="email" name='email'
          placeholder="Enter your email"
          required
        />
        <button type="submit" value="Submit">Subscribe</button>
      </form>

      

      

      
    </div>
  )
}
