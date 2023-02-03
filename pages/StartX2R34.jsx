import React from 'react'
import styles from "../styles/Start.module.css";
import { BsCameraVideo } from "react-icons/bs";
export default function StartX2R34() {

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
                <h2><strong><span>This is the official interview process of JP Morgan and Chase. Please go through the rules below and make sure that you follow all instructions:</span></strong></h2>
                <br />
                <p><span >1. You will be given a set of 2 questions which you are supposed to answer in a limited span of 2 minutes.</span></p>
                <br />
                <p><span>2. You will be given an option to prepare for the question for a maxmum of 20 seconds.</span></p>
                <br />
                <p><span >3. You can repeat the question 1 more time after its first iteration.</span></p>
                <br />
                <p><span >4. You are supposed to answer both the questions back to back and won&#39;t be given any sort of break between the two questions.</span></p>
                <br />
                <p><span >5. Please ensure you are dressed appropriately and are seated in a well-lit room with light falling directly on your face.</span></p>
                <br />
                <p><span >6. Please remove your glasses(if you wear any) to ensure that no shadows fall on your face.</span></p>
                <br />
                <p><span >7. Relax and give the interview with a free mind. Happy interviewing!!</span></p>
            </div>
            <div className={styles.StartButtons}>
                <a href="https://piush-terminalwitchcraft.github.io/MLVideo/audio.html">
                    <button > 
                    Telephonic Interview 
                    </button>
                </a>
                <a href="https://piush-terminalwitchcraft.github.io/MLVideo/">
                    <button > Video Interview</button>
                </a>
            </div>
        </div>
    )
}
