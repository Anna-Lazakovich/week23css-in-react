import React, { useState } from 'react';
import styles from './Card.module.css';

function Card(props) {
    const { id, title, price, speed, description, color } = props;

    const [checked, setChecked] = useState(false);
    
    const handleChange = () => {
        setChecked(!checked);
    };

return(
    <div 
        //className={styles.tariff} 
        key={id}
        onClick={handleChange}
        className={checked
            ? (styles.check)
            : (styles.tariff)
        }>

        <p className={`${styles.title} ${styles[color]}`}>{title}</p>
        <div className={`${styles.price} ${styles[color]}`}>руб. <span className={styles.price_number}>{price}</span> /мес.
        </div>
        <div className={styles.speed}>{speed}
        </div>
        <div className={styles.description}>{description}
        </div>
    </div>
    )}

export default Card;