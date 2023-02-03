import React from 'react';
import { Container, Row, Col } from "reactstrap";

const whiteBackground  = {
  backgroundColor: "#E5E9F0!important",
  color: "#434C5E!important",
}
const blackText  = {
   color: "#2E3440!important",
   fontWeight: "bold!important",
}
const lightblackText  = {
  color: "#3B4252!important",
}
const linkStyle  = {
  color: "#5E81AC!important",
  textDecoration: "none!important",

}
const FeatureBox = (props) => {


  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3" style={blackText}>{feature.title}</h5>
                <p className="text-muted mb-3 f-15" style={lightblackText}>{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning" style={linkStyle}>Read More <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3" style={blackText}>{feature.title}</h5>
            <p className="text-muted mb-3 f-15" style={lightblackText}>{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning" style={linkStyle}>Read More <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}

const Feature = () => {

  const features = [
    {id : 1, img : "./images/MockInterviews.png", title : "1. Mock Interviews", desc : "Our AI model analyzes your facial expressions, eye contact, hand gestures and general pitch and tone of your voice. Based on this data, it rates whether you are confident or not.", link : "/"},
    {id : 2, img : "./images/Telephone.png", title : "2. Telephonic Interviews", desc : "We also provide an analysis of your voice and determine how professional and confident you sound.", link : "/"},
    {id : 3, img : "./images/Group Members.png", title : "3. Book a mentor/Expert", desc : "For our pro subscribers, we have provided an additional feature of ask the expert where users can have a 1 on 1 mentoring session with experts who have already gotten through the interview process of a certain company.", link : "/"},
  ];

  return (
    <section className="section" id="feature" style={whiteBackground}>
      <div style={{
        width:"164px",
        height:"164px",
        marginTop:"-182px",
      }}>
        <svg class="GleamingFrostWind-mwrnry-0 lezwyI" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><linearGradient id="frost-wind-gleam-gradient" x2="100%" y1="25%" y2="25%"><stop offset="0%" stop-color="rgba(136,192,208,0.9)"><animate attributeName="stop-color" dur="4s" repeatCount="indefinite" values="rgba(143,188,187,0.9); rgba(136,192,208,0.9); rgba(94,129,172,0.9)"></animate></stop><stop offset="30%" stop-color="rgba(129,161,193,0.9)"><animate attributeName="stop-color" dur="4s" repeatCount="indefinite" values="rgba(136,192,208,0.9); rgba(129,161,193,0.9); rgba(136,192,208,0.9)"></animate></stop><stop offset="45%" stop-color="rgba(94,129,172,0.9)"><animate attributeName="stop-color" dur="4s" repeatCount="indefinite" values="rgba(129,161,193,0.9); rgba(94,129,172,0.9); rgba(129,161,193,0.9)"></animate></stop><stop offset="100%" stop-color="rgba(143,188,187,0.9)"></stop></linearGradient><path d="M250 40h-93c-11.046 0-20-8.954-20-20s8.954-20 20-20h93c11.046 0 20 8.954 20 20s-8.954 20-20 20zm206 19c0-32.533-26.468-59-59-59h-67c-11.046 0-20 8.954-20 20s8.954 20 20 20h67c10.477 0 19 8.523 19 19s-8.523 19-19 19h-31c-11.046 0-20 8.954-20 20s8.954 20 20 20h31c32.532 0 59-26.467 59-59zm14 117c0-11.046-8.954-20-20-20H116c-10.477 0-19-8.523-19-19s8.523-19 19-19h169c11.046 0 20-8.954 20-20s-8.954-20-20-20H116c-32.532 0-59 26.467-59 59s26.468 59 59 59h334c11.046 0 20-8.954 20-20zm-135 79c0-11.046-8.954-20-20-20H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h295c11.046 0 20-8.954 20-20zm177 39.5c0-32.809-26.691-59.5-59.5-59.5H395c-11.046 0-20 8.954-20 20s8.954 20 20 20h57.5c10.752 0 19.5 8.748 19.5 19.5s-8.748 19.5-19.5 19.5H333c-11.046 0-20 8.954-20 20s8.954 20 20 20h119.5c32.809 0 59.5-26.691 59.5-59.5zM185 413c0-11.046-8.954-20-20-20H92.5c-10.752 0-19.5-8.748-19.5-19.5S81.748 354 92.5 354H253c11.046 0 20-8.954 20-20s-8.954-20-20-20H92.5C59.691 314 33 340.691 33 373.5S59.691 433 92.5 433H165c11.046 0 20-8.954 20-20zm308 0c0-11.046-8.954-20-20-20H245c-11.046 0-20 8.954-20 20s8.954 20 20 20h228c11.046 0 20-8.954 20-20zm-84 79c0-11.046-8.954-20-20-20h-89c-11.046 0-20 8.954-20 20s8.954 20 20 20h89c11.046 0 20-8.954 20-20zm-169.005 0c0-11.046-8.954-20-20-20H139c-11.046 0-20 8.954-20 20s8.954 20 20 20h80.995c11.046 0 20-8.954 20-20z" fill="url(#frost-wind-gleam-gradient)"></path></svg>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark" style={blackText}><span className="text-warning"style={blackText}>Features</span></h3>
              <p className="text-muted" style={lightblackText}>Our website provides multiple features to help you with your interview preparation. With AI powered guidance providing in depth analysis and feedback, you are set to ace your next interview!</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}

export default Feature;