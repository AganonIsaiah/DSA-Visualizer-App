import React, { useState } from 'react';
import axios from 'axios';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');
  const [peekValue, setPeekValue] = useState(null);

  const pushElement = async () => {
    if (input !== '') {
      try {
        const response = await axios.post('http://localhost:8080/api/stack/push', { element: input });
        setStack(response.data);
        setInput('');
        setPeekValue(null); // Reset peek display
      } catch (error) {
        console.error('Error pushing element', error);
      }
    }
  };
  
  const popElement = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/stack/pop');
      setStack(response.data);
      setPeekValue(null); // Reset peek display
    } catch (error) {
      console.error('Error popping element', error);
    }
  };

  const peekElement = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/stack/peek');
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

      {peekValue !== null && (
        <div className="peek-display">Top Element: {peekValue}</div>
      )}

      <div className="stack">
        {stack.map((element, index) => (
          <div key={index} className="stack-element">
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
