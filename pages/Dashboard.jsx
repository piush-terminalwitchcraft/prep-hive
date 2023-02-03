import { async } from "@firebase/util";
import React, { useState } from "react";
import { DashboardNavBar, DashBoardContent } from "../components";
import styles from "../styles/DashBoard.module.css";

async function getRes(msg) {
	
	return msg;
}

function Dashboard(props) {

	const [isChatbotOpen, setChatbotOpen] = useState(true);
	const [userMessage, setUserMessage] = useState('');
	const [responseMessage, setResponseMessage] = useState('');
  
	const handleSubmit = async event => {
	  event.preventDefault();
	  const response = await getRes(userMessage);
	  console.log(response);
	  setResponseMessage(response);
	}

	return (
		<div className={styles.MainBody}>
			<DashboardNavBar />
			<DashBoardContent />
			{isChatbotOpen && (
				<div className={styles.ChatbotContainer}>
				<form onSubmit={handleSubmit}>
				  <input type="text" value={userMessage} onChange={event => setUserMessage(event.target.value)} />
				  <button type="submit">Submit</button>
				</form>
				<p>{responseMessage}</p>
			  </div>
			)}

		</div>
	);
}

export default Dashboard;
