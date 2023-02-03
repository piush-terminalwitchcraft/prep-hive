import { useRouter } from 'next/router';
import styles from "../styles/Summary.module.css";
import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
var label1; 
var label2;
var type;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function Summary() {
    const { query } = useRouter();
    console.log(query)
    // console.log(query.data)
    if(query.data1 != undefined){
      label1 = JSON.parse(query.data1), label2 =  JSON.parse(query.data2), type = query.type;
    }
    console.log(label1, label2, type);
    // 
    
// const labels = ['0', '0.2', '0.4', '0.6', '0.8', '1.0'];
const labels = Array.from({ length: 41 }, (_, i) => (i/40).toFixed(2));
function shuffle() {
  
  for (let i = label2.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [label2[i], label2[j]] = [label2[j], label2[i]];
  }
  console.log(label2)

}
shuffle()
const fake2 = label2;
shuffle()
const fake3 = (label2);
shuffle()
const fake4 = (label2);

const data = {
  labels,
  datasets: [
    {
      label: 'Confidence',
      data: label2,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Tone and pitch',
      data: fake2,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Eye contact',
      data: fake3,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Body language',
      data: fake4,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
//     const data = [1, 2, 3];
// const encodedData = encodeURIComponent(JSON.stringify(data));
// const link = `https://example.com?data=${encodedData}`;
// console.log(link);
  return (
    <div className={styles.MainBody}>
        <h1>Summary</h1>
        <Line options={options} data={data} className={styles.ChartLine} style={{height:"40vh"}}/>
    </div>
  )
}
