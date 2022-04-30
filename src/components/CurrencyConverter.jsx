import { useState } from "react";

const CurrencyConverter =({moneda1, moneda2, tasaConversion})=>{
const [pesos, setPesos]= useState(0)
const [dolares, setDolares] = useState(0)


   
const pesosADolares =(event) =>{
    setPesos(event.target.value)
    setDolares(event.target.value/tasaConversion)
    }
 
    return(
            <div>
               <label htmlFor="pesos">{moneda1}</label>
               <input type="number" id="pesos"  value={pesos} onChange={pesosADolares}/> 

               <label htmlFor="dolares">{moneda2}</label>
               <input type="number" id="dolares" value={dolares} onChange={(event) => {
                   setPesos(event.target.value*tasaConversion)
                   setDolares(event.target.value)
                    }}/> 
            </div>

    )
}

export {CurrencyConverter}