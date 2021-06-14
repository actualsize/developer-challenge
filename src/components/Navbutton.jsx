// nav button for updating displayed content
// accesses and updates active item through context provider
import React from "react";
import { css } from "@emotion/core";
import {
	useActiveProductContext,
	useActiveProductUpdateContext,
} from "../contextProviders/ActiveProductProvider";

export default function Navbutton({ productType }) {
	// state and setState function for active product
	const activeProduct = useActiveProductContext();
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

					user-select: none;
				`}
				style={{
					backgroundColor:
						activeProduct === productType
							? `#DA55BD`
							: `transparent`,
				}}
				onClick={() => {
					updateActiveProduct(productType);
				}}
			>
				{productType}
			</button>
		</li>
	);
}
