import { useState } from "react"


const EditableText =({defaultValue})=>{
const [text, setText] = useState(defaultValue)

    const bg={
        backgroundColor : 'grey'
    }

    const handleText=()=>{
        setText()


        return(
            <input type="text" value={text} placeholder= {defaultValue}/>
     )

}


return(
        <p style={bg} onClick={handleText}>{text}</p>
)
}

export {EditableText}

