import React, { useState } from 'react'

function MyButton ({ children }) {
    const [times, setTimes] = useState(0)

    return(
        <>
            <button onClick={() => setTimes(times == 1 ? 0 : 1)}>{children} {times}</button>
            {times == 1 && <p>This is the line when button is 1</p>}
        </>
        
    )
}

export default MyButton;
