import React, { useState, useRef, useEffect } from 'react'
import SubComponent from './SubComponent';

const App = () => {
  const [input, setInput] = useState();
  const renderCount = useRef(0);
  const inputRef = useRef();
  useEffect(()=>{
    renderCount.current = renderCount.current + 1;
  })
  
  return (
    <div>
      <input ref={inputRef} type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button type='button' onClick={()=>{inputRef.current.focus()}} >Focus</button>
      <div>I rendered {renderCount.current} times.</div>
      <SubComponent />
    </div>
  )
}

export default App