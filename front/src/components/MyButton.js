import React, { useState } from 'react'

function MyButton ({ theme, setTheme }) {
    return(
        <>
            <button onClick={() => setTheme(theme == 'Black' ? 'White' : 'Black')}>{theme === 0 ? 'Switch to Dark Theme' : 'Switch to Light Theme'}</button>
        </>
        
    )
}

export default MyButton;
