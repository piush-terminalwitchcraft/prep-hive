import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              <p className="text-muted">PrepHive is a cutting-edge AI-powered platform that helps job seekers achieve interview success. We understand that interview preparation can be a stressful and time-consuming process, so we've created a solution that makes it easier and more efficient. Our AI technology provides personalized feedback on your interview skills, giving you the confidence and knowledge you need to impress hiring managers and land your dream job. At PrepHive, we're committed to empowering job seekers and helping them unlock their full potential. Join us today and take the first step towards a successful interview.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Your one stop solution to all things interviews!</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6>
                <p className="text-muted font-weight-light">Our mission at PrepHive is to make interview preparation accessible and stress-free for job seekers. By harnessing the power of AI, we aim to provide personalized feedback and guidance to help our users ace their interviews and secure their dream jobs.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                <p className="text-muted font-weight-light">Our vision is to be the leading AI-powered interview platform, empowering job seekers with the skills and confidence they need to succeed in today's competitive job market. We envision a future where interview preparation is effortless and accessible to all, leading to more job offers and happier careers.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;