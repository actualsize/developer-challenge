// div component containing ImageContainer and BodyContainer child components for Card
// accesses active product through ActiveProductProvider
// sets callback function through CallbackProvider
import React from "react";
import { css } from "@emotion/core";
import { useActiveProductContext } from "../contextProviders/ActiveProductProvider";
import { useCallbackUpdateContext } from "../contextProviders/CallbackProvider";
import ImageContainer from "./ImageContainer";
import BodyContainer from "./BodyContainer";

// callback function that will be used by Orderbutton component
const callbackForOrderButton = () => {
	console.log(`Order button clicked.`);
};

export default function Card({ products }) {
	// get active product state from ActiveProductProvider
	const activeProduct = useActiveProductContext();

	// get setState function from CallbackProvider
	const updateCallback = useCallbackUpdateContext();
	// set the callback function as CallbackProvider state variable
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
			{/* pass product data to child components */}
			<ImageContainer product={products[activeProduct]} />
			<BodyContainer product={products[activeProduct]} />
		</div>
	);
}
