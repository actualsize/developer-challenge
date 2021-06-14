import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserCircle,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
	useActiveProductContext,
	useActiveProductUpdateContext,
} from "../providers/activeProductProvider";

export default function Navbar() {
	const activeProduct = useActiveProductContext();
	const updateActiveProduct = useActiveProductUpdateContext();
	return (
		<div className="navbar-container">
			<ul className="navbar">
				<li>
					<FontAwesomeIcon
						icon={faUserCircle}
						size="xs"
						color="white"
						transform="up-2.5"
						onClick={() => {
							console.log(`User icon clicked.`);
						}}
					/>
				</li>
				<li>
					<button
						type="button"
						className="link-button"
						style={{
							backgroundColor:
								activeProduct === `SOUP`
									? `#DA55BD`
									: `transparent`,
						}}
						onClick={() => {
							updateActiveProduct(`SOUP`);
						}}
					>
						SOUP
					</button>
				</li>
				<li>
					<button
						type="button"
						className="link-button"
						style={{
							backgroundColor:
								activeProduct === `DESSERT`
									? `#DA55BD`
									: `transparent`,
						}}
						onClick={() => {
							updateActiveProduct(`DESSERT`);
						}}
					>
						DESSERTS
					</button>
				</li>
				<li>
					<button
						type="button"
						className="link-button"
						style={{
							backgroundColor:
								activeProduct === `PET FOOD`
									? `#DA55BD`
									: `transparent`,
						}}
						onClick={() => {
							updateActiveProduct(`PET FOOD`);
						}}
					>
						PET FOOD
					</button>
				</li>
				<li>
					<FontAwesomeIcon
						icon={faShoppingCart}
						size="xs"
						color="white"
						transform="up-2.5"
						onClick={() => {
							console.log(
								`Shopping cart icon clicked.`
							);
						}}
					/>
				</li>
			</ul>
		</div>
	);
}
