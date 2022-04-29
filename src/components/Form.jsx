import { useState } from "react";

const Form =()=>{

 const  [nombre, setNombre] = useState('');
 const [apellido, setApellido] = useState('');
 const [edad, setEdad] = useState(0);

 const handleOnClick=()=>{
    if(!(nombre && apellido && edad)){
        alert('Complete los campos o muera!');
    }else{
        alert('Gracias por completar los datos');
        setNombre('');
        setApellido('');
        setEdad(0);
    }
 }
    return (
        <form action="">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" value={nombre} id={nombre} onChange={(event) => { setNombre(event.target.value) }} />

            <label htmlFor="apellido">Apellido</label>
            <input type="text" value={apellido} id={apellido} onChange={(event) => { setApellido(event.target.value) }}/>

            <label htmlFor="edad">Edad</label>
            <input type="number" value={edad} id={edad}  onChange={(event) => { setEdad(event.target.value) }} />

            <button type="button" onClick={handleOnClick}>Enviar</button>
        </form>
    )
}

export {Form}
