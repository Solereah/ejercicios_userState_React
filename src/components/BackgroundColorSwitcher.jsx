import { useState } from "react";

const BackgroundColorSwitcher =()=>{
    
    const [backgroundColor, setBackgroundColor] = useState('');
    
    const style ={
        width: '100px',
        height: '100px',
        backgroundColor
    
    }


    return(
        <div>
            <label htmlFor="color">Ingrese un color</label>
            <input type="text" value={backgroundColor} id="color" onChange={(event) => {setBackgroundColor(event.target.value) }} />
            <div style={style}></div>
        </div>
    )
}

export {BackgroundColorSwitcher}