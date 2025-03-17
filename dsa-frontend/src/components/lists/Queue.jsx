import useListBased from '../../utility/ListBased';
import { Link } from 'react-router-dom';

const Queue = () => {
    const {
        list,
        input,
        peekValue,
        recentlyRemoved,
        setInput,
        addElement,
        removeElement,
        peekElement,
        emptyList,
      } = useListBased('queue');

    return (
        <div className="queue-container">
            <h2>Queue Visualizer</h2>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter element"
            />

            <div>
                <button onClick={() => addElement("offer")} className="offer-btn">Offer</button>
                <button onClick={() => removeElement("poll","yes")} className="poll-btn">Poll</button>
                <button onClick={() => peekElement("peek")} className="peek-btn">Peek</button>
                <button onClick={() => emptyList("empty")} className="empty-btn">Empty List</button>
            </div>

            {list.length <= 0 && (
                <div>Queue is empty.</div>
            )}

            {peekValue !== null && list.length > 0 && (
                <div className="peek-display">Top Element: {peekValue}</div>
            )}

            {recentlyRemoved !== null && (
                <div className="removed-element">Removed Element: {recentlyRemoved}</div>
            )}

            <div className="queue">
                {list.map((element, i) => (
                    <span key={i} className="queue-element">
                        {element}{" "}
                    </span>
                ))}
            </div>

            <div>
                <Link to="/"><button>Home</button></Link>
             </div>
        </div>
    )
}



export default Queue;