import React from 'react';
import styles from "./Display.module.css";
const Display = ({displayVal}) => {
  return (
    <div>
      <input type="text"
      className={styles.button}
      value={displayVal}/>
    </div>
  )
}

export default Display
