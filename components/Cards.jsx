import React from 'react'
import {  GoPlay } from "react-icons/go";
import { AiFillRightCircle} from "react-icons/ai";
import {IoNavigateCircle   } from "react-icons/io5";
import styles from './../styles/Cards.module.css';
export default function (props) {
    const { cardHeader, cardLogo, cardLink, background, description, type } = props;
  return (
    <div className={styles.CardBody}
    // add gradient style
    style={{
        background: background,
        color:"#4C566A"
    }}
    >
        <div>
            <img src={cardLogo} alt="Company Logo" className={styles.CardLogo} />
        </div>
        <div className={styles.CardHeader}>
            {cardHeader}
        </div>
        <div className={styles.CardLink}>
            <a href={cardLink} target="_blank" rel="noreferrer">
                {type=="company"?<GoPlay color='#E5E9F0'/>:type=="blogs"?<AiFillRightCircle color="#E5E9F0" />:<IoNavigateCircle color='#E5E9F0'/>}
            </a>
        </div>
        <div className={styles.CardDescription}>
            {description}
        </div>
    
    </div>
  )
}
