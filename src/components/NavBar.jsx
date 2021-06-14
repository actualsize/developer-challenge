// navbar for switching displayed content
import React from "react";
import { css } from "@emotion/core";
import {
	faUserCircle,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Navbutton from "./Navbutton";
import Iconbutton from "./Iconbutton";

export default function Navbar() {
	return (
		<div
			className="navbar-container"
			css={css`
				position: absolute;
				bottom: 0;
			`}
		>
			{/* user list of nav items
			icons only trigger console.log()
			buttons update active product and 
			their backgrounds are determined by active product */}
			<ul
				className="navbar"
				css={css`
					width: 310px;
					height: 30px;

					padding: 0 0;
					margin: 30px 0;

					display: flex;
					align-items: stretch;
					justify-content: space-between;

					list-style-type: none;
				`}
			>
				<Iconbutton
					iconType={faUserCircle}
					consoleMessage="User icon clicked."
				/>
				<Navbutton productType="SOUP" />
				<Navbutton productType="DESSERT" />
				<Navbutton productType="PET FOOD" />
				<Iconbutton
					iconType={faShoppingCart}
					consoleMessage="Shopping cart icon clicked."
				/>
			</ul>
		</div>
	);
}
