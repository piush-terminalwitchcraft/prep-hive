import React from 'react'
import { GoLinkExternal, GoPlay } from "react-icons/go";
import styles from "./../styles/Companies.module.css";
import Cards from './Cards';

const companies = [
    {
        cardHeader: "JPMorgan Chase",
        cardLogo: "https://imgs.search.brave.com/eY3I7fKdSAoEl0MU8UwgBmDHO6sbtMmhPtbIRuZFOiA/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUdGLWw3OTJFcU82/c2tyeGJlMHlnNldK/dmR0QWI1MnhkaS04/YmgzVzd3PXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
        cardLink: "/StartX2R34",
        // for jp morgan little light background gradient, different from adobe
        background: "linear-gradient(to right, #cbcbff, #79e2ff)",
        description: "They have 3 rounds.The AI interview round is important.",
        type: "company",
    },
    {
        cardHeader: "Adobe",
        cardLogo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
        cardLink: "/StartY3Y4Y1",
        // for adobe little light background gradient
        background: "linear-gradient(to right, #ff978c, #ffdc92)",
        description: "Adobe WIT provides great scholarships for tech analysts.",
        type: "company",
    },
    {
        cardHeader: "Barclays",
        cardLogo: "Images/Barclays.jpg",
        cardLink: "https://home.barclays/",
        // for jp morgan little light background gradient, different from adobe

        background: "linear-gradient(to right, #cbcbff, #79e2ff)",
        description: "The company prefers policy-adhering candidates.",
        type: "blogs",
    },
    {
        cardHeader: "Oracle",
        cardLogo: "Images/Oracle.jpg",
        cardLink: "https://www.oracle.com/in/",
        // for jp morgan little light background gradient, different from adobe

        background: "linear-gradient(to right, #cbcbff, #79e2ff)",
        description: "Focused on java developers with good knowledge.",
        type: "blogs",
    },
    
    
];

const blogs = [
    // same as company, just a little bit blogs related to interview experience
    {
        cardHeader: "UNG",
        cardLogo: "Images/ung1.jpg",
        cardLink: "https://ung.edu/career-services/online-career-resources/interview-well/tips-for-a-successful-interview.php",
        // for jp morgan little light background gradient, different from adobe

        background: "linear-gradient(to right, #cbcbff, #79e2ff)",
        description: "Interview tips to help you get through!",
        type: "blogs",
    },
    {
        cardHeader: "Monster Jobs",
        cardLogo: "Images/Monster.jpg",
        cardLink: "https://www.monster.com/career-advice/article/boost-your-interview-iq",
        // for adobe little light background gradient
        background: "linear-gradient(to right, #ff978c, #ffdc92)",
        description: "How to answer questions confidently.",
        type: "blogs",
    },
    {
        cardHeader: "Jefferson Group",
        cardLogo: "Images/Jefferson.png",
        cardLink: "https://www.experis.com/en/insights/articles/2021/05/25/20-tips-for-great-job-interviews",
        // for jp morgan little light background gradient, different from adobe

        background: "linear-gradient(to right, #cbcbff, #79e2ff)",
        description: "Easy tips to calm down before your interview",
        type: "blogs",
    },
    
    
    
    
   
    {
        cardHeader: "Indeed",
        cardLogo: "Images/indeed.png",
        cardLink: "https://in.indeed.com/career-advice/interviewing/interview-tips",
        // for adobe little light background gradient
        background: "linear-gradient(to right, #ff978c, #ffdc92)",
        description: "How to say certain keywords and maintain eye-contact",
        type: "blogs",
    },

]

const mentors = [
    // same as above
    {
        cardHeader: "Mr Anuj Sharma",
        cardLogo: "Images/boy.png",
        cardLink: "https://www.linkedin.com/",
        // for jp morgan little light background gradient, different from adobe
        background: "linear-gradient(to right, rgb(250 197 159), rgb(152 108 52))",
        description: "Cracking interviews is my passion",
        type: "mentors",
    },
    {
        cardHeader: "Ms Priya Jain",
        cardLogo:"Images/ProfilePic.png",
        cardLink: "https://www.linkedin.com/",
        // for jp morgan little light background gradient, different from adobe
        background: "linear-gradient(to right, rgb(255 203 250), rgb(255 121 188))",
        description: "Expert at guiding HR round",
        type: "mentors",
    },
    {
        cardHeader: "Mr Donald Trump",
        cardLogo: "Images/ProfileOnceMore.png",
        cardLink: "https://www.linkedin.com/",
        // for jp morgan little light background gradient, different from adobe
        background: "linear-gradient(to right, rgb(250 197 159), rgb(152 108 52))",
        description: "Expert at rioting and Jan 6th",
        type: "mentors",
    },
    {
        cardHeader: "Ms Nancy Pelosi",
        cardLogo:"Images/user.png",
        cardLink: "https://www.linkedin.com/",
        // for jp morgan little light background gradient, different from adobe
        background: "linear-gradient(to right, rgb(255 203 250), rgb(255 121 188))",
        description: "Guiding youth to become woke",
        type: "mentors",
    }
]
export default function DashBoardContent() {

  return (
    <div className={styles.Company}>
        <div className={styles.CompanyHeader}> 
            Mock Interviews
        </div>
        <div className={styles.CompanyBody}>
            {companies.map((company, index) => (
                <Cards key={index} cardHeader={company.cardHeader} cardLogo={company.cardLogo} 
                background={company.background}
                description={company.description}
                type={company.type}
                cardLink={company.cardLink} />
            ))}
        </div>  
        <div className={styles.CompanyHeader}> 
            Blogs
        </div> 
        <div className={styles.CompanyBody}>
            {blogs.map((company, index) => (
                <Cards key={index} cardHeader={company.cardHeader} cardLogo={company.cardLogo} 
                background={company.background}
                description={company.description}
                type={company.type}
                cardLink={company.cardLink} />
            ))}
        </div>    
        <div className={styles.CompanyHeader}> 
            Mentors
        </div> 
        <div className={styles.CompanyBody}>
            {mentors.map((company, index) => (
                <Cards key={index} cardHeader={company.cardHeader} cardLogo={company.cardLogo} 
                background={company.background}
                description={company.description}
                type={company.type}
                cardLink={company.cardLink} />
            ))}
        </div>    
    </div>
  )
}
