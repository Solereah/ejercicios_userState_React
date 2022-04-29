import React, { useState } from 'react'

const P = () => {

const [text, setText]= useState('orange')

const style={
    color: 'red',
    backgroundColor: text,
}

const changeColor =()=>{
    const ternario = text === 'orange'? 'blue': 'orange'
    setText(ternario)
    }


  return (
    <div>
        <p onClick={changeColor} style={style}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eos itaque nulla voluptas nostrum fugiat similique. Ducimus sint, expedita saepe odit quisquam neque aperiam dicta excepturi? Corrupti aut quaerat assumenda.
        </p>
    </div>
  )
}


export default P