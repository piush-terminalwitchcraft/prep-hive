import { useRouter } from 'next/router';
import styles from "../styles/Summary.module.css";
import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

var label1; 
var label2;
var label3;


export default function Summary() {
    const { query } = useRouter();
    console.log(query)
    console.log(query.data)
    label1 = JSON.parse(query.data1), label2 = JSON.parse(query.data2), type = query.type;
    console.log(label1, label2, type);
    const chartData = {
      labels: Array.from({ length: label1.length }, (_, i) => i),
      datasets: [
        {
          label: 'Data 1',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: label1,
        },
      ],
    };
//     const data = [1, 2, 3];
// const encodedData = encodeURIComponent(JSON.stringify(data));
// const link = `https://example.com?data=${encodedData}`;
// console.log(link);
  return (
    <div className={styles.MainBody}>
        <h1>Summary</h1>
        <Line data={chartData} />
    </div>
  )
}
