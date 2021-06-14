// component for wrapping card image in div
import React from "react";
import { css } from "@emotion/core";

export default function ImageContainer({ product }) {
	return (
		<div
			className="image-container"
			css={css`
				// 600/golden_ratio^2
				height: 229px;
				width: 330px;

				position: relative;
			`}
		>
			<img
				css={css`
					position: absolute;
					bottom: 0;

					width: 100%;
					min-height: 230px;
				`}
				src={product.image.url}
				alt={product.image.alt}
			/>
		</div>
	);
}
