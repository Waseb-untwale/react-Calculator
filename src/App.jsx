import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Display from './component/Display'
import Button from './component/ButtonContainer'
import styles from "./App.module.css";
import { useState } from 'react';
function App() {
  const [calVal,setCalVal]=useState("")

  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setCalVal("")
    }
    else if(buttonText==='='){
      let result= eval(calVal)
      setCalVal(result)
    }
    else{
      let update= calVal+buttonText;
      setCalVal(update)
    }
  }

return(
  <div className={styles.calculator}>
    <Display displayVal={calVal}></Display>
    <Button onButtonClick={onButtonClick}></Button>
  </div>
)
  
}

export default App
