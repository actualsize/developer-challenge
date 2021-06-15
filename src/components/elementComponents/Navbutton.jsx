// nav button for updating displayed content
// accesses and sets active product through ActiveProductProvider
import React from "react";
import { css } from "@emotion/core";
import {
	useActiveProductContext,
	useActiveProductUpdateContext,
} from "../contextProviders/ActiveProductProvider";

export default function NavButton({ productType }) {
	// get active product state from ActiveProductProvider
	const activeProduct = useActiveProductContext();
	// get setState function from ActiveProductProvider
	const updateActiveProduct = useActiveProductUpdateContext();
	return (
		<li>
			<button
				type="button"
				className="nav-button"
				css={css`
					width: 77px;
					height: 22px;

					color: #fff;
					font-family: Jura;
					font-size: 14px;
					text-decoration: none;

					display: block;

					border: none;
					margin-top: 7px;

					border-radius: 15px;

					cursor: pointer;
					user-select: none;
				`}
				style={{
					backgroundColor:
						// render button background according to
						// activeProduct and productType
						activeProduct === productType
							? `#DA55BD`
							: `transparent`,
				}}
				onClick={() => {
					updateActiveProduct(productType);
				}}
			>
				{/* text for button */}
				{productType}
			</button>
		</li>
	);
}
