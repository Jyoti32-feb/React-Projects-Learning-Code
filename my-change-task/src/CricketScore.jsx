import React from 'react'

const CricketScore = () => {
    const [count, setCount] = React.useState(0);
    function changeCount(){
        setCount(e.target.value);
    }
  return (
    <div>
        <h2>Cricket Score</h2>
        <input type="text" value={count} onChange={changeCount} /><br /><br />
        <button onClick={() => setCount(count + 1)}>
        +1
        </button>
        <button onClick={() => setCount(count +2)}>
        +2
        </button>
        <button onClick={() => setCount(count + 4)}>
        +4
        </button>
        <button onClick={() => setCount(count + 6)}>
        +6
        </button>
        <p>Current Score: {count}</p>
    </div>
  );
};

export default CricketScore
