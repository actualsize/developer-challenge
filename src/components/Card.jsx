import React from "react";
import styles from "./Card.module.css";

import { ReactComponent as Logo } from "../assets/Logo.svg";

// CARD COMPONENT

// Renders product information given the data passed in as `item`.
// `orderButton` is a callback function run when the order button is clicked.
// image is structured to preserve aspect ratio but may break with very wide images
const Card = ({ item, orderButton }) => {
	return (
		<div className={styles.card_container}>
			<Logo className={styles.card_logo} />
			<div className={styles.card_img}>
				{/* alt-text was not provided in the database, so title of item was used instead */}
				<img src={item.image.url} alt={item.title.text} />
			</div>
			<div className={styles.card_body}>
				<div className={styles.card_text}>
					<h1>{item.title.text}</h1>
					<p>{item.description.text}</p>
				</div>

				<button type="submit" onClick={orderButton}>
					Order {item.quantity.text}
				</button>
			</div>
		</div>
	);
};

export default Card;
