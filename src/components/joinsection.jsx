import React, { useState } from 'react';


function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your newsletter signup logic here
    console.log(`Submitting email: ${email}`);
    setEmail('');
  };

  return (
    <div className="newsletter">
      <h1 className='news-title'>Subscribe to Newsletter</h1>
      <form onSubmit={handleSubmit} className='form-panel' method="post" action="process_form.php">
        <input
          type="email" name='email'
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" value="Submit">Subscribe</button>
      </form>
    </div>
  );
}

export default App;
