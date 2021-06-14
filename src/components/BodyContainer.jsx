import React from "react";
import { css } from "@emotion/core";
import OrderButton from "./OrderButton";

export default function BodyContainer({
	product,
	logOrderButtonPressed,
}) {
	return (
		<div
			className="body-container"
			css={css`
				height: 371px;
				width: 330px;
				padding: 30px;
				box-sizing: border-box;
				color: #000;
				display: flex;
				flex-direction: column;
			`}
		>
			<div className="body-title-container">
				{product.title.text}
			</div>
			<div
				className="body-description-container"
				css={css`
					font-family: Jura;
					font-size: 1rem;
					margin-top: 1rem;
				`}
			>
				{product.description.text}
			</div>
			<OrderButton
				product={product}
				logOrderButtonPressed={logOrderButtonPressed}
			/>
		</div>
	);
}
