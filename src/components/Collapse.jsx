import React, { useState } from 'react'

  

const Collapse=({children, label})=>{
    
    const [isOpen, setIsOpen] = useState(false)

    const abrirChildren=() => setIsOpen(prevState => !prevState)

  
    
    return(
        <>

            <div onClick={abrirChildren}>
                {label}
                <i >
                    ▶️
                </i>
            </div>
            {isOpen && children}
        </>
    )
}

export {Collapse}
