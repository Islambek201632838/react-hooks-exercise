import React, { useRef, useState } from 'react';

function MagicBlock() {
  const divRef = useRef(null);
  const clickCountRef = useRef(0);
  const [clickCount, setClickCount] = useState(0);

  const changeColor = () => {
    const randomColor = getRandomColor();
    const div = divRef.current;

    if (div) {
      div.style.backgroundColor = randomColor;
      clickCountRef.current += 1;
      setClickCount(clickCountRef.current);
    }
  };

  const getRandomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * 16);
      color += letters[index];
    }
    return color;
  };

  const letters = '0123456789ABCDEF';

  return (
    <>
      <div
        ref={divRef}
        onClick={changeColor}
        style={{
          padding: '20px',
          border: '1px solid black',
          borderRadius: '5px',
          marginBottom: '10px'
        }}
      >
        Magic Block
      </div>
      <div style={{ textAlign: 'center' }}>
        Click Count: {clickCount}
      </div>
    </>
  );
}

export default MagicBlock;
