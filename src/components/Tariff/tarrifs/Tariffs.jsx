//import React, { useState } from 'react';
import styles from './Tariffs.module.css';
import Card from "../card/Card";
import tariffInfo from './tariffInfo.json';

function Tariffs() {
  return(
    <div className={styles.container}>
      {tariffInfo.map((props) => {
      return <Card key={props.id} {...props} />
      })}
    </div>
  );
}  

export default Tariffs;