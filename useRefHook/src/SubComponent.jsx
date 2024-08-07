import React, { useState, useRef, useEffect, memo } from 'react'

const SubComponent = () => {
    const [input, setInput] = useState();
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })
    return (
        <div>
            <input type='text' placeholder='inner comp' value={input} onChange={(e) => setInput(e.target.value)} />
            <p>SubComponent rendered { renderCount.current} times</p>
        </div>
    )
}

export default memo(SubComponent);