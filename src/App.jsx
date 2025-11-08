import React, { useRef, useState, useEffect } from 'react';
import Confetti from 'js-confetti';
import './style.css';

const confetti = new Confetti();

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(count);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // This is very in efficient , every time the Interval is created.
  // On the other hand if we remove count from dep array, we will get stale closure value in console

  return (
    <button className="btn" onClick={(e) => setCount((c) => c + 1)}>
      <span role="img" aria-label="react-emoji">
        ⚛️
      </span>{' '}
      {count}
    </button>
  );
};

export default App;
