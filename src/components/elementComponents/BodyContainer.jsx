// component for wrapping card body content in div
import React from "react";
import { css } from "@emotion/core";
import OrderButton from "./OrderButton";

export default function BodyContainer({ product }) {
	return (
		<div
			className="body-container"
			css={css`
				// 600/golden_ratio
				height: 371px;
				width: 330px;

				display: flex;
				flex-direction: column;

				box-sizing: border-box;
				padding: 30px;

				color: #000;
			`}
		>
			{/* product title */}
			<div className="body-title-container">
				{product.title.text}
			</div>
			{/* product description */}
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
			<OrderButton product={product} />
		</div>
	);
}
