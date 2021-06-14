import React from "react";
import { css } from "@emotion/core";
import { useCallbackContext } from "../providers/CallbackProvider";

export default function OrderButton({ product }) {
	const callBackForCard = useCallbackContext();
	return (
		<button
			css={css`
				background-color: #da55bd;
				width: 100%;
				height: fit-content;
				margin-top: auto;
				padding: 15px;
				border-radius: 20px;
				font-size: 1.5rem;
			`}
			type="button"
			onClick={() => {
				callBackForCard();
			}}
		>
			ORDER {product.quantity.text.toUpperCase()}
		</button>
	);
}
