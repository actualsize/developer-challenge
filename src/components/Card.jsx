// div component containg image and body children for Card
// accesses active item from context provider
import React from "react";
import { css } from "@emotion/core";
import { useActiveProductContext } from "../contextProviders/ActiveProductProvider";
import { useCallbackUpdateContext } from "../contextProviders/CallbackProvider";
import ImageContainer from "./ImageContainer";
import BodyContainer from "./BodyContainer";

// callback function that will be used by Orderbutton
const callbackForOrderButton = () => {
	console.log(`Order button clicked.`);
};

export default function Card({ products }) {
	// get active product from active product context
	const activeProduct = useActiveProductContext();

	// get setState function from callback context provider and
	// set the callback function as state variable
	const updateCallback = useCallbackUpdateContext();
	updateCallback(() => callbackForOrderButton);

	return (
		<div
			className="card"
			css={css`
				width: 330px;
				height: 600px;

				border-radius: 50px;

				overflow: hidden;

				background-color: white;

				box-shadow: 0px 3px 10px #444;
			`}
		>
			<ImageContainer product={products[activeProduct]} />
			<BodyContainer product={products[activeProduct]} />
		</div>
	);
}
