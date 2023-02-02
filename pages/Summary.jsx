import React from 'react'
import { useRouter } from 'next/router';
import styles from "../styles/Summary.module.css";

export default function Summary() {
    const { query } = useRouter();
    if(query.data == undefined){
    }
    else{
        console.log(query.data)
        const data = JSON.parse(query.data);
        console.log(data);

    }
//     const data = [1, 2, 3];
// const encodedData = encodeURIComponent(JSON.stringify(data));
// const link = `https://example.com?data=${encodedData}`;
// console.log(link);
  return (
    <div className={styles.MainBody}>
        <h1>Summary</h1>
    </div>
  )
}
