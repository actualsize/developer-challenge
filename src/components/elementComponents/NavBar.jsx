// navbar for wrapping nav items as a ul in div
import React from "react";
import { css } from "@emotion/core";
import {
	faUserCircle,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";
import IconButton from "./IconButton";

export default function Navbar() {
	return (
		<div
			className="navbar-container"
			css={css`
				position: absolute;
				bottom: 0;
			`}
		>
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
				{/* pass FA icon type and console message to Iconbutton components */}
				<IconButton
					iconType={faUserCircle}
					consoleMessage="User icon clicked."
				/>
				{/* pass product type to Navbutton components */}
				<NavButton productType="SOUP" />
				<NavButton productType="DESSERT" />
				<NavButton productType="PET FOOD" />
				<IconButton
					iconType={faShoppingCart}
					consoleMessage="Shopping cart icon clicked."
				/>
			</ul>
		</div>
	);
}
