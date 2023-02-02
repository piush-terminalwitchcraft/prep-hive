import React from 'react'
import styles from "../styles/Start.module.css";
import { BsCameraVideo } from "react-icons/bs";
export default function StartY3Y4Y1() {

  return (
    <div className={styles.StartBody}>
      {/* header */}
      <div className={styles.StartHeader}>
        What can you Expect?
      </div>
      <div className={styles.StartMainContent}>
        <div className={styles.StartMainContentLeft}>
          <img src="Images/start_interview.png" alt="Start" />
        </div>
        <div className={styles.StartMainContentRight}>
          <div >
            <BsCameraVideo color='#4C566A' size={36} />
            <div>
              1 video question
            </div>
          </div>
          <div >
            <BsCameraVideo color='#4C566A' size={36} />
            <div>
              1 essay question
            </div>
          </div>
          <div >
            <BsCameraVideo color='#4C566A' size={36} />
            <div>
              1 multiple choice question
            </div>
          </div>
          <div >
            <BsCameraVideo color='#4C566A' size={36} />
            <div>
              1 Ranked list
            </div>
          </div>
        </div>
      </div>
      <div className={styles.StartDescription}>
        <h2><strong><span>This is the official interview process of Adobe Women In Tech. Please go through the rules below and make sure that you follow all instructions:</span></strong></h2>
        <br />
        <p><span>1. There will be 2 rounds of interviews.</span></p>
        <br />
        <p><span>2. The first round will be technical while the second round will be purely HR .</span></p>
        <br />
        <p><span>3. You will be tested on your ability to articulate your thoguhts and intentions in a concise manner.</span></p>
        <br />
        <p><span>4. There will be a 40 min break between the two interviews.</span></p>
        <br />
        <p><span>5. Please ensure you are dressed appropriately and are seated in a well-lit room with light falling directly on your face.</span></p>
        <br />
        <p><span>6. Don&#39;t be nervous as our interviews are aimed to function more like a comversation.</span></p>
        <br />
        <p><span>7. Relax and give the interview with a free mind. Happy interviewing!!</span></p>
      </div>
      <div className={styles.StartButtons}>
        <a href="file:///home/piush/Documents/WebDev/ML/index.html">
          <button >
            Telephonic Interview
          </button>
        </a>
        <a href="file:///home/piush/Documents/WebDev/ML/index.html">
          <button > Video Interview</button>
        </a>
      </div>
    </div>
  )
}
