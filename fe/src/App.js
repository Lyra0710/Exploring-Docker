// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:8000/app/hello/');
      console.log("-------------------", response)
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div className="App">
      <h1>React-Django Example</h1>
      <button onClick={handleClick}>Get Message</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
