import React from 'react'
import { useRouter } from 'next/router';
import styles from "../styles/Summary.module.css";

export default function Summary() {
    const { query } = useRouter();
    console.log(query)
    if(query.data1 == undefined){
    }
    else{
        console.log(query.data)
        const label1 = JSON.parse(query.data1), label2 = JSON.parse(query.data2), type = JSON.parse(query.type);
        console.log(label1, label2, type);

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
