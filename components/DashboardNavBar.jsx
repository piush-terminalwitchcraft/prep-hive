import React, { useState } from "react";
import Link from "next/link";
import { faBars, FaBlog, FaHandsHelping, FaHome } from "react-icons/fa";
import styles from "./../styles/NavBarDashBoard.module.css";
function DashboardNavBar() {
	const MenuItems = [
		{
			path: "/Dashboard",
			name: "Home",
			icon: <FaHome />,
		},
		{
			path: "/blog",
			name: "Blogs",
			icon: <FaBlog />,
		},
		{
			path: "/AskTheExperts",
			name: "Ask the Experts ",
			icon: <FaHandsHelping />,
		},
	];
	return (
		<div className={styles.NavBody}>
			<div className={styles.NavBodyContents}>
				{MenuItems.map((item) => {
					return <MenuItem item={item} />;
				})}
			</div>
			<div className={styles.NavProfile}>
				<div className={styles.NavProfileIcon}>P</div>
				<div className={styles.NavProfileEmail}>
					piushpaul.16@gmail.com
				</div>
			</div>
		</div>
	);
}

function MenuItem(props) {
	const { item } = props;
	return (
		<Link href={item.path} className={styles.NavBodyContentList}>
			<p className={styles.NavIcons}>{item.icon}</p>
			<p className={styles.NavList}>{item.name}</p>
		</Link>
	);
}

export default DashboardNavBar;
