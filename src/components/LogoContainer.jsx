import React from "react";
import { css } from "@emotion/core";
import { ReactComponent as Logo } from "../assets/Logo.svg";

export default function LogoContainer() {
	return (
		<div
			className="logo-container"
			css={css`
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
