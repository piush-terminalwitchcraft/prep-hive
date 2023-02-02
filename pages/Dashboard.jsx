import React, { useState } from "react";
import { DashboardNavBar, DashBoardContent } from "../components";
import styles from "../styles/DashBoard.module.css";

function Dashboard(props) {
	return (
		<div className={styles.MainBody}>
			<DashboardNavBar />
			<DashBoardContent />
		</div>
	);
}

export default Dashboard;
