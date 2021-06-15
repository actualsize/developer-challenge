// order button in card body
// accesses callback function from Card component through CallbackProvider
import React from "react";
import { css } from "@emotion/core";
import { useCallbackContext } from "../contextProviders/CallbackProvider";

export default function OrderButton({ product }) {
	// get callback state from CallbackProvider
	const callBackForCard = useCallbackContext();
	return (
		<button
			className="order-button"
			css={css`
				width: 100%;
				height: fit-content;

				margin-top: auto;
				padding: 15px;
				border-radius: 20px;

				font-size: 1.5rem;
				font-family: Jura;

				background-color: #da55bd;
				color: #fff;
				border: none;

				cursor: pointer;
			`}
			type="button"
			onClick={() => {
				callBackForCard();
			}}
		>
			{/* uses product quantity to render appropriate text */}
			ORDER {product.quantity.text.toUpperCase()}
		</button>
	);
}
