// OrderButton in card body. Accesses callback function from context
import React from "react";
import { css } from "@emotion/core";
import { useCallbackContext } from "../contextProviders/CallbackProvider";

export default function OrderButton({ product }) {
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
			`}
			type="button"
			onClick={() => {
				callBackForCard();
			}}
		>
			{/* uses production quantity to render appropriate text */}
			ORDER {product.quantity.text.toUpperCase()}
		</button>
	);
}
