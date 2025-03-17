import { Link } from 'react-router-dom';
import useListBased from '../../utility/ListBased'; 

const Stack = () => {
  const {
    list,
    input,
    peekValue,
    setInput,
    addElement,
    removeElement,
    peekElement,
    emptyList,
  } = useListBased('stack');

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
        <button onClick={() => addElement("push")} className="push-btn">Push</button>
        <button onClick={() => removeElement("pop","no")} className="pop-btn">Pop</button>
        <button onClick={() => peekElement("peek")} className="peek-btn">Peek</button>
        <button onClick={() => emptyList("empty")} className="empty-btn">Empty List</button>
      </div>

      {list.length <= 0 && (
        <div>Stack is empty.</div>
      )}

      {peekValue !== null && list.length > 0 && (
        <div className="peek-display">Top Element: {peekValue}</div>
      )}

      <div className="stack">
        {list.toReversed().map((element, index) => (
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
