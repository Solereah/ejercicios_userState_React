import { useState } from "react";


const SearchList =({items})=>{

console.log(items)
console.log(items.sort())

    const [search, setSearch]=useState('')
    const [itemsFiltrados, setItemsFiltrados]= useState(items.sort())

    const handleChange=(event)=>{
     
        setSearch(event.target.value)
        const arrayFiltrado = items.filter(item=>item.toLowerCase().includes(event.target.value.toLowerCase())).sort()
        setItemsFiltrados(arrayFiltrado)    
    }

 

    

    return(
    <div>
        <label htmlFor="buscar">Buscar</label>
        <input type="text" id="buscar" value={search} onChange={handleChange} />
        <ul>
          {itemsFiltrados.map((itemFiltrado)=>{ 
           return <li>{itemFiltrado}</li>
           })
           } 
         </ul>
    </div>
 
    )
}
export {SearchList}