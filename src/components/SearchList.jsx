import { useState } from "react";


const SearchList =({items})=>{

    const [search, setSearch]=useState('')
    const [itemsFiltrados, setItemsFiltrados]= useState(items.sort())

    const fontWeight = {
        fontWeight: 'bold'
    }


    const recorrerItems =(item)=>{
        const  inicioPalabra = item.toLowerCase().indexOf(search.toLowerCase())
        const finPalabra = inicioPalabra + search.length
        const principio = item.slice(0, inicioPalabra)
        const medio = item.slice(inicioPalabra, finPalabra)
        const final = item.slice(finPalabra)

        return (
            <li key={item}>
                {principio}<span style = {fontWeight}>{medio}</span>{final}
            </li>
        )
    }

    const handleChange=(event)=>{
        let valueInput = event.target.value
        setSearch(valueInput)
        const arrayFiltrado = items.filter(item=>item.toLowerCase().includes(valueInput.toLowerCase())).sort()
        setItemsFiltrados(arrayFiltrado) 
        
       
    }
  
 
    
    return(
    <div>
        <label htmlFor="buscar">Buscar</label>
        <input type="text" id="buscar" value={search} onChange={handleChange} />
        <ul>
          {itemsFiltrados.map(recorrerItems)
           } 
         </ul>
    </div>
 
    )
}
export {SearchList}