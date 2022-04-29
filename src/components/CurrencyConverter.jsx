import { useState } from "react";

const CurrencyConverter =()=>{
const [pesos, setPesos]= useState(0)
const [dolares, setDolares] = useState(0)
    
   
const pesosADolares =(event) =>{
    setPesos(event.target.value)
    setDolares(event.target.value/200)
    }
 
    return(
            <div>
               <label htmlFor="pesos">Pesos</label>
               <input type="number" id="pesos"  value={pesos} onChange={pesosADolares}/> 

               <label htmlFor="dolares">Dolares</label>
               <input type="number" id="dolares" value={dolares} onChange={(event) => {
                   setPesos(event.target.value*200)
                   setDolares(event.target.value)
                    }}/> 
            </div>

    )
}

export {CurrencyConverter}