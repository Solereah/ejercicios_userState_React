import './App.css';
import P from './components/P';
import { Collapse } from './components/Collapse';
import {Form} from './components/Form';
import {BackgroundColorSwitcher} from './components/BackgroundColorSwitcher';
import { CurrencyConverter } from './components/CurrencyConverter';
import {SearchList} from './components/SearchList';
import { EditableText } from './components/EditableText';




const App=()=> {
 const items=["Python"," Java"," JavaScript", "Net", "PHP", "Ruby", "R"," TypeScript", "Swift", "Objective-C"] 

  return (
    <div className="App">
        {/*<P></P>
        <Collapse label= "Desplegar menu">
          <ul>
            <li>lalala</li>
            <li>pepe</li>
            <li>lololo</li>
          </ul>
          </Collapse>
          <Form></Form>
          <BackgroundColorSwitcher/>
          <SearchList items={items}/>
          <CurrencyConverter moneda1='pesos' moneda2='dolares' tasaConversion={200} />
          <CurrencyConverter moneda1='pesos' moneda2='euros' tasaConversion={220} />
         */}
         
     <EditableText defaultValue={"Hola  mundo"}/>

    </div>
  );
}

export default App;
