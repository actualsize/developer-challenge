import React from "react";
import { css } from "@emotion/core";
import { useActiveProductContext } from "../providers/activeProductProvider";
import { useCallbackUpdateContext } from "../providers/CallbackProvider";
import ImageContainer from "./ImageContainer";
import BodyContainer from "./BodyContainer";

const callbackForButton = () => {
	console.log(`Order button clicked`);
};

export default function Card({ products }) {
	const activeProduct = useActiveProductContext();

	const updateCallback = useCallbackUpdateContext();
	updateCallback(() => callbackForButton);

	return (
		<div
			className="card"
			css={css`
				width: 330px;
				height: 600px;

				border-radius: 50px;

				background-color: white;

				overflow: hidden;
			`}
		>
			<ImageContainer product={products[activeProduct]} />
			<BodyContainer product={products[activeProduct]} />
		</div>
	);
}
