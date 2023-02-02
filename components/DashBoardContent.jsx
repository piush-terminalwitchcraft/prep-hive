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
        description: "Jp morgan is a nice company",
        type: "company",
    },
    {
        cardHeader: "Adobe",
        cardLogo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
        cardLink: "/StartY3Y4Y1",
        // for adobe little light background gradient
        background: "linear-gradient(to right, #ff978c, #ffdc92)",
        description: "Adobe is a nice company",
        type: "company",
    },
    
    
];

const blogs = [
    // same as company, just a little bit blogs related to interview experience
    {
        cardHeader: "JPMorgan Chase",
        cardLogo: "https://imgs.search.brave.com/eY3I7fKdSAoEl0MU8UwgBmDHO6sbtMmhPtbIRuZFOiA/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUdGLWw3OTJFcU82/c2tyeGJlMHlnNldK/dmR0QWI1MnhkaS04/YmgzVzd3PXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
        cardLink: "https://www.jpmorganchase.com/",
        // for jp morgan little light background gradient, different from adobe

        background: "linear-gradient(to right, #cbcbff, #79e2ff)",
        description: "Easy, HR type interview",
        type: "blogs",
    },
    {
        cardHeader: "Adobe",
        cardLogo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
        cardLink: "https://www.adobe.com/",
        // for adobe little light background gradient
        background: "linear-gradient(to right, #ff978c, #ffdc92)",
        description: "Adobe is a nice company",
        type: "blogs",
    },
    {
        cardHeader: "JPMorgan Chase",
        cardLogo: "https://imgs.search.brave.com/eY3I7fKdSAoEl0MU8UwgBmDHO6sbtMmhPtbIRuZFOiA/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUdGLWw3OTJFcU82/c2tyeGJlMHlnNldK/dmR0QWI1MnhkaS04/YmgzVzd3PXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
        cardLink: "https://www.jpmorganchase.com/",
        // for jp morgan little light background gradient, different from adobe

        background: "linear-gradient(to right, #cbcbff, #79e2ff)",
        description: "Easy, HR type interview",
        type: "blogs",
    },
    {
        cardHeader: "Adobe",
        cardLogo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
        cardLink: "https://www.adobe.com/",
        // for adobe little light background gradient
        background: "linear-gradient(to right, #ff978c, #ffdc92)",
        description: "Adobe is a nice company",
        type: "blogs",
    },
    {
        cardHeader: "JPMorgan Chase",
        cardLogo: "https://imgs.search.brave.com/eY3I7fKdSAoEl0MU8UwgBmDHO6sbtMmhPtbIRuZFOiA/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUdGLWw3OTJFcU82/c2tyeGJlMHlnNldK/dmR0QWI1MnhkaS04/YmgzVzd3PXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
        cardLink: "https://www.jpmorganchase.com/",
        // for jp morgan little light background gradient, different from adobe

        background: "linear-gradient(to right, #cbcbff, #79e2ff)",
        description: "Easy, HR type interview",
        type: "blogs",
    },
    {
        cardHeader: "Adobe",
        cardLogo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
        cardLink: "https://www.adobe.com/",
        // for adobe little light background gradient
        background: "linear-gradient(to right, #ff978c, #ffdc92)",
        description: "Adobe is a nice company",
        type: "blogs",
    },
    {
        cardHeader: "JPMorgan Chase",
        cardLogo: "https://imgs.search.brave.com/eY3I7fKdSAoEl0MU8UwgBmDHO6sbtMmhPtbIRuZFOiA/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUdGLWw3OTJFcU82/c2tyeGJlMHlnNldK/dmR0QWI1MnhkaS04/YmgzVzd3PXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
        cardLink: "https://www.jpmorganchase.com/",
        // for jp morgan little light background gradient, different from adobe

        background: "linear-gradient(to right, #cbcbff, #79e2ff)",
        description: "Easy, HR type interview",
        type: "blogs",
    },
    {
        cardHeader: "Adobe",
        cardLogo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
        cardLink: "https://www.adobe.com/",
        // for adobe little light background gradient
        background: "linear-gradient(to right, #ff978c, #ffdc92)",
        description: "Adobe is a nice company",
        type: "blogs",
    },

]

const mentors = [
    // same as above
    {
        cardHeader: "Mr Anuj Sharma",
        cardLogo: "https://imgs.search.brave.com/rPm4p_BosWJLNzlbmORiAOpRPzArWigpJhvw7Nz054A/rs:fit:439:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/eXFERHBwZ244VkhX/UVZUdThXUU1BSGFI/XyZwaWQ9QXBp",
        cardLink: "https://www.linkedin.com/",
        // for jp morgan little light background gradient, different from adobe
        background: "linear-gradient(to right, rgb(250 197 159), rgb(152 108 52))",
        description: "Cracking interviews is my passion",
        type: "mentors",
    },
    {
        cardHeader: "Ms Priya Jain",
        cardLogo:"https://imgs.search.brave.com/Ow8Ync2xhUt3O6QojOQzgDsCjEE6lbezWVQE64kFgWM/rs:fit:439:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5fMzFoV3Rn/TnpyWEs3WndZUmdu/c09BSGFIXyZwaWQ9/QXBp",
        cardLink: "https://www.linkedin.com/",
        // for jp morgan little light background gradient, different from adobe
        background: "linear-gradient(to right, rgb(255 203 250), rgb(255 121 188))",
        description: "Expert at guiding HR round",
        type: "mentors",
    },
    {
        cardHeader: "Mr Donald Trump",
        cardLogo: "https://imgs.search.brave.com/rPm4p_BosWJLNzlbmORiAOpRPzArWigpJhvw7Nz054A/rs:fit:439:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/eXFERHBwZ244VkhX/UVZUdThXUU1BSGFI/XyZwaWQ9QXBp",
        cardLink: "https://www.linkedin.com/",
        // for jp morgan little light background gradient, different from adobe
        background: "linear-gradient(to right, rgb(250 197 159), rgb(152 108 52))",
        description: "Expert at rioting and Jan 6th",
        type: "mentors",
    },
    {
        cardHeader: "Ms Nancy Pelosi",
        cardLogo:"https://imgs.search.brave.com/Ow8Ync2xhUt3O6QojOQzgDsCjEE6lbezWVQE64kFgWM/rs:fit:439:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5fMzFoV3Rn/TnpyWEs3WndZUmdu/c09BSGFIXyZwaWQ9/QXBp",
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
