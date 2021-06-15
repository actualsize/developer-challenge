// component for wrapping logo in a div
// useful for setting padding to align logo with end of Card corner radius
import React from "react";
import { css } from "@emotion/core";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

export default function LogoContainer() {
	return (
		<div
			className="logo-container"
			css={css`
				// absolute position is used so logo can be placed without
				// displacing centered card
				position: absolute;
				transform: translateY(-333px);

				width: 330px;

				box-sizing: border-box;
				padding-left: 50px;

				color: white;
			`}
		>
			<Logo />
		</div>
	);
}
