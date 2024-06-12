import React from 'react'
import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  
const buttonNames=[ "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",]
  
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((item)=>(
        <button className={styles.button}
        onClick={()=>onButtonClick(item)}>{item}</button>
      ))}
    </div>
  )

  
}

export default ButtonContainer