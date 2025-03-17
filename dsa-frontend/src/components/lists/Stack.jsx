import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../../api/dsa_api';
import { Link } from 'react-router-dom';
 

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');
  const [peekValue, setPeekValue] = useState(null);

  const pushElement = async () => {
    if (input !== '') {
      try {
        const response = await axios.post(`${API_URL}/stack/push`, input);
        setStack(response.data);
        setInput('');
        setPeekValue(null); 
      } catch (error) {
        console.error('Error pushing element', error);
      }
    }
  };
  
  const popElement = async () => {
    try {
      const response = await axios.post(`${API_URL}/stack/pop`);
      setStack(response.data);
      setPeekValue(null); 
    } catch (error) {
      console.error('Error popping element', error);
    }
  };

  const peekElement = async () => {
    try {
      const response = await axios.get(`${API_URL}/stack/peek`);
      setPeekValue(response.data); 
    } catch (error) {
      console.error('Error peeking element', error);
    }
  };

  return (
    <div className="stack-container">
      <h2>Stack Visualizer</h2>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter element"
      />
      
      <div>
        <button onClick={pushElement} className="push-btn">Push</button>
        <button onClick={popElement} className="pop-btn">Pop</button>
        <button onClick={peekElement} className="peek-btn">Peek</button>
      </div>

      {stack.length <= 0 && (
        <div>Stack is empty.</div>
      )}

      {peekValue !== null && stack.length > 0 && (
        <div className="peek-display">Top Element: {peekValue}</div>
      )}

      <div className="stack">
        {stack.toReversed().map((element, index) => (
          <div key={index} className="stack-element">
            {element}
          </div>
        ))}
      </div>

      <div>
        <Link to="/"><button>Home</button></Link>
      </div>

    </div>
  );
};

export default Stack;
