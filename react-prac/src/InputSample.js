import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChng = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  }

  return (
    <div>
      <input onChange={onChng} value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  )
}

export default InputSample;