import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserCircle,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.css";

// MAIN MENU

// Contains menu items for each type in current database,
// as well as icons for user account and shopping cart.
// Callback function for menu items activates onClick,
// clicks to item types will mutate state and re-render with new item.
const Menu = ({ type, setItem }) => {
	console.log(type);
	console.log(type === `SOUP`);
	return (
		<div className={styles.menu_container}>
			<MenuItem
				callback={() => console.log(`User icon clicked.`)}
			>
				<FontAwesomeIcon icon={faUserCircle} />
			</MenuItem>
			{/* active is a boolean which activates a class in the child component */}
			<MenuItem
				active={type === `SOUP`}
				callback={() => setItem(`SOUP`)}
			>
				SOUPS
			</MenuItem>
			<MenuItem
				active={type === `DESSERT`}
				callback={() => setItem(`DESSERT`)}
			>
				DESSERTS
			</MenuItem>
			<MenuItem
				active={type === `PET FOOD`}
				callback={() => setItem(`PET FOOD`)}
			>
				PET FOOD
			</MenuItem>
			<MenuItem
				callback={() => console.log(`Cart icon clicked.`)}
			>
				<FontAwesomeIcon icon={faShoppingCart} />
			</MenuItem>
		</div>
	);
};

// MENU ITEM

// Simple child wrapper.
// Activates `callback` on click.
// Uses `active` boolean to determine if current
// item is selected, activates styles if so.
const MenuItem = ({ children, callback, active }) => {
	return (
		<div className={active && styles.active} onClick={callback}>
			{children}
		</div>
	);
};

export default Menu;
