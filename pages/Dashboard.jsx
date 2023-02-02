import React, { useState } from "react";
import { DashboardNavBar } from "../components";
import styles from "../styles/DashBoard.module.css";
function Dashboard(props) {
	return (
		<div className={styles.MainBody}>
			<DashboardNavBar />
			Hello dashboard
		</div>
	);
}

export default Dashboard;
