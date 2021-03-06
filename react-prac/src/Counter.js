import React, { useState } from 'react';


function Counter() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1); // 함수를 넣어줘도 됨(최적화시 용이)
  }
  const onDecrease = () => {
    setNumber(number - 1); // 바꿀 상태를 넣어도 됨 
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;