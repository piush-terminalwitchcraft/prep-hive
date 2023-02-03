import React from "react";
import { Container, Row, Col } from "reactstrap";


const Hero = () => {
	const styles = {
		backgroundColor: "#2E3440!important",
	}

	const blueText = {
		color: "#5E81AC!important",
	}
	
	const whiteText = {
		color: "#E5E9F0!important",
	}
	const grayText = {
		fontSize: "1.6rem!important",
		color: "#D8DEE9		!important",
	}
	const cyanButton = {
		backgroundColor: "#88C0D0!important",
		color: "#434C5E!important",
		border: "none!important",
	}
	return (
		<section className="section position-relative" style={styles}>
			<Container>
				<Row className="align-items-center">
					<Col lg={6}>
						<div className="pr-lg-5">
							<p className="text-uppercase text-primary font-weight-medium f-14 mb-4"style={blueText}>
								InterView
							</p>
							<h1 className="mb-4 font-weight-normal line-height-1_4" style={whiteText}>
								{" Interview Expertise, at Your"}
								<span className="text-primary font-weight-medium" style={blueText}>
									Fingertips
								</span>
							</h1>
							<p className="text-muted mb-4 pb-2" style={grayText}>
							PrepHive is your AI-powered interview coach. With advanced technology, PrepHive provides personalized feedback on your interview skills, so you can shine during your next job interview. Say goodbye to nervous jitters and hello to confidence and success..
							</p>
							<a href="/Dashboard" className="btn btn-warning" style={cyanButton}>
								Find Out How{" "}
								<span className="ml-2 right-icon">&#8594;</span>
							</a>
						</div>
					</Col>
					<Col lg={6}>
						<div className="mt-5 mt-lg-0">
							<img
								src="Images/Group Members.png"
								alt=""
								className="img-fluid mx-auto d-block"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
