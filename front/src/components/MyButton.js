import React, { useState } from 'react'
import styles from './MyButton.module.css'

function MyButton ({ theme, setTheme }) {

    return(
        <>
            <button onClick={() => setTheme(theme == 1 ? 0 : 1)}>Click here</button>
        </>
        
    )
}

export default MyButton;
